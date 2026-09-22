const pipeline = document.querySelector("#pipeline");
const detailContent = document.querySelector("#detail-content");
const activeCount = document.querySelector("#active-count");

let selectedId = applications[0].id;

function getStage(stageId) {
  return stages.find((stage) => stage.id === stageId);
}

function renderPipeline() {
  pipeline.innerHTML = stages
    .map((stage, index) => {
      const cards = applications
        .filter((application) => application.stage === stage.id)
        .map(
          (application) => `
            <button class="application-card ${application.id === selectedId ? "is-selected" : ""}" data-id="${application.id}" type="button">
              <span class="company">${application.company}</span>
              <span class="role">${application.role}</span>
            </button>`
        )
        .join("");

      return `
        <article class="stage ${stage.id}" style="--order: ${index}">
          <div class="stage-top">
            <span class="stage-index">0${index + 1}</span>
            <span class="node" aria-hidden="true"></span>
            ${index < stages.length - 1 ? '<span class="connector" aria-hidden="true"></span>' : ""}
          </div>
          <h3>${stage.name}</h3>
          <p>${stage.description}</p>
          <div class="cards">${cards || '<span class="empty-state">暂无记录</span>'}</div>
        </article>`;
    })
    .join("");

  pipeline.querySelectorAll(".application-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = Number(card.dataset.id);
      renderPipeline();
      renderDetail();
    });
  });
}

function renderDetail() {
  const application = applications.find((item) => item.id === selectedId);
  const stage = getStage(application.stage);
  detailContent.innerHTML = `
    <div class="detail-mark">${application.company.slice(0, 1)}</div>
    <p class="detail-company">${application.company}</p>
    <p class="detail-role">${application.role}</p>
    <div class="current-stage">
      <span>当前阶段</span>
      <strong>${stage.name}</strong>
    </div>
    <p class="detail-description">${stage.description}</p>
    <p class="detail-note">点击流程中的其他记录，可在此切换查看。</p>`;
}

activeCount.textContent = applications.filter((item) => item.stage !== "rejected").length;
renderPipeline();
renderDetail();
