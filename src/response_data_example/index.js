export const goodsInfo = {
  productName: "glimmer", //产品名称
  productImgUrl: "/glimmer/nmsl.jpg", //产品图片地址
  productDescription: "fucking", //产品描述
  startTime: "2022-04-01 12:00", //产品开始时间
  endTime: "2022-04-03 12:00", //产品结束时间
  num: 100, //产品数量
  price: 100, //产品金额
  attend: true, //该用户是否参加
  pass: true, //（参加后需要的参数）是否通过初筛
};

//商品列表测试数据
export const allGoodsListTestData = [
  {
    productName: "glimmer", //产品名称
    productImgUrl: "/glimmer/qwer.jpg", //产品图片地址
    productDescription: "fqewt", //产品描述
    startTime: "2022-04-01 12:00", //产品开始时间
    endTime: "2022-04-03 12:00", //产品结束时间
    num: 100, //产品数量
    price: 100, //产品金额
    attend: true, //该用户是否参加
    pass: true, //（参加后需要的参数）是否通过初筛
  },
  {
    productName: "uestc", //产品名称
    productImgUrl: "/uestc/asdqewt.png", //产品图片地址
    productDescription: "qwert", //产品描述
    startTime: "2021-02-02 12:00", //产品开始时间
    endTime: "2021-04-01 12:00", //产品结束时间
    num: 1000, //产品数量
    price: 2000, //产品金额
    attend: true, //该用户是否参加
    pass: false, //（参加后需要的参数）是否通过初筛
  },
  {
    productName: "sssss", //产品名称
    productImgUrl: "/uestc/asdq.png", //产品图片地址
    productDescription: "qaaaa", //产品描述
    startTime: "2022-02-02 12:00", //产品开始时间
    endTime: "2022-04-01 12:00", //产品结束时间
    num: 100, //产品数量
    price: 20, //产品金额
    attend: true, //该用户是否参加
    pass: false, //（参加后需要的参数）是否通过初筛
  },
  {
    productName: "uec", //产品名称
    productImgUrl: "/uestc/aswt.png", //产品图片地址
    productDescription: "aaaa", //产品描述
    startTime: "2021-02-02 12:00", //产品开始时间
    endTime: "2021-04-01 12:00", //产品结束时间
    num: 0, //产品数量
    price: 200, //产品金额
    attend: true, //该用户是否参加
    pass: false, //（参加后需要的参数）是否通过初筛
  },
  {
    productName: "uec", //产品名称
    productImgUrl: "/uestc/aswt.png", //产品图片地址
    productDescription: "aaaa", //产品描述
    startTime: "2021-02-02 12:00", //产品开始时间
    endTime: "2021-04-01 12:00", //产品结束时间
    num: 0, //产品数量
    price: 200, //产品金额
    attend: true, //该用户是否参加
    pass: false, //（参加后需要的参数）是否通过初筛
  },
  {
    productName: "uec", //产品名称
    productImgUrl: "/uestc/aswt.png", //产品图片地址
    productDescription: "aaaa", //产品描述
    startTime: "2021-02-02 12:00", //产品开始时间
    endTime: "2021-04-01 12:00", //产品结束时间
    num: 0, //产品数量
    price: 200, //产品金额
    attend: true, //该用户是否参加
    pass: false, //（参加后需要的参数）是否通过初筛
  },
];

export const goodsInfoDetail = {
  admitRuleId: null, //不用管
  admitProductId: null, //不用管
  ruleType: 1, //规则类型，1为大于小于型，0位是否型，例如第一条rule即为大于小于型
  ruleDataJudge: 1, //根据规则类型来判别，若ruletype是1，则1代表大于，0代表小于，若ruletype是0，则1代表是，0代表否
  ruleDataFirst: 4, //用来判断是否型数据，我们想约定1为婚姻状况，2为有无子嗣，3为就业情况，4为年龄
  ruleDataSecond: 18, //现在只有判断年龄的情况会用到该数据段，其余情况该数据段为null
  delayRuleId: null, //该段表明是否有信用筛选，若是普通rule则没有该字段，若该字段为1则表示有信用筛选，不需要为用户提供信用具体如何筛选
};

export const userInformation = {
  userId: 13245, //用户ID
  userIdentification: null, //不用管
  userName: "曾勇", //用户名字
  userTelephone: "11111111111", //用户手机
  userRegion: "四川成都", //用户所在区域
  userIsWedding: 0, //是否结婚，0代表无
  userIsChildBorn: 0, //是否有孩子，0代表无
  userIsWork: 1, //是否在工作，1代表有
  userSex: 1, //性别，1代表男性，0代表女性
};

export const tradeInfo = {
  tradeId: 13541239, //订单编号
  tradeUserId: 1, //交易用户ID
  tradeMoney: 100, //交易金额
  activityId: 1, //活动ID
  tradeTime: "2022-04-03 12:00:00", //交易时间
  tradeStatus: 1, //交易状况，0为失败，1为成功
};

export const displayArr = [
  {
    img1: "0",
    img2: "1",
    text: "天",
  },
  {
    img1: "2",
    img2: "3",
    text: "时",
  },
  {
    img1: "4",
    img2: "5",
    text: "分",
  },
  {
    img1: "6",
    img2: "7",
    text: "秒",
  },
];
