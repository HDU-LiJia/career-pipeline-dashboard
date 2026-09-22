const stages = [
  { id: "applied", name: "投递", description: "已提交申请，等待招聘方查看" },
  { id: "screening", name: "简历筛选", description: "招聘方正在评估简历" },
  { id: "first-interview", name: "一面", description: "与业务或招聘团队进行初步沟通" },
  { id: "second-interview", name: "二面", description: "进入深入面试或终面环节" },
  { id: "offer", name: "Offer", description: "已获得录用意向" },
  { id: "rejected", name: "淘汰", description: "本次流程已结束" }
];

const applications = [
  { id: 1, company: "星云科技", role: "前端开发工程师", stage: "first-interview" },
  { id: 2, company: "远帆智能", role: "产品经理", stage: "screening" },
  { id: 3, company: "青屿数据", role: "数据分析师", stage: "offer" },
  { id: 4, company: "光点互联", role: "用户运营", stage: "applied" },
  { id: 5, company: "知行咨询", role: "策略分析师", stage: "rejected" }
];
