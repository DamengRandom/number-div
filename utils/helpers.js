export function convertToGua(number) {
  switch (number) {
    case 1:
      return "sky";
    case 2:
      return "swamp";
    case 3:
      return "fire";
    case 4:
      return "thunder";
    case 5:
      return "wind";
    case 6:
      return "water";
    case 7:
      return "mountain";
    default:
      return "land";
  }
}

export function convertToYao(number) {
  switch (number) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 6;
  }
}

export function allGuas(guaCi) {
  switch (guaCi) {
    case "sky-sky":
      return "乾";
    case "land-land":
      return "坤";
    case "water-thunder":
      return "屯";
    case "mountain-water":
      return "蒙";
    case "water-sky":
      return "需";
    case "sky-water":
      return "讼";
    case "land-water":
      return "师";
    case "water-land":
      return "比";
    case "wind-sky":
      return "小畜";
    case "sky-swamp":
      return "履";
    case "land-sky":
      return "泰";
    case "sky-land":
      return "否";
    case "sky-fire":
      return "同人";
    case "fire-sky":
      return "大有";
    case "land-mountain":
      return "谦";
    case "thunder-land":
      return "豫";
    case "swamp-thunder":
      return "随";
    case "mountian-wind":
      return "蛊";
    case "land-swamp":
      return "临";
    case "wind-land":
      return "观";
    case "fire-thunder":
      return "噬嗑";
    case "mountian-fire":
      return "贲";
    case "mountian-land":
      return "剥";
    case "land-thunder":
      return "复";
    case "sky-thunder":
      return "无妄";
    case "mountian-sky":
      return "大畜";
    case "mountian-thunder":
      return "颐";
    case "swamp-wind":
      return "大过";
    case "water-water":
      return "坎";
    case "fire-fire":
      return "离";
    case "swamp-mountain":
      return "咸";
    case "thunder-wind":
      return "恒";
    case "sky-mountain":
      return "遁";
    case "thunder-sky":
      return "大壮";
    case "fire-land":
      return "晋";
    case "land-fire":
      return "明夷";
    case "wind-fire":
      return "家人";
    case "fire-swamp":
      return "睽";
    case "water-mountain":
      return "蹇";
    case "thunder-water":
      return "解";
    case "mountain-swamp":
      return "损";
    case "wind-thunder":
      return "益";
    case "swamp-sky":
      return "夬";
    case "sky-wind":
      return "姤";
    case "swamp-land":
      return "萃";
    case "land-wind":
      return "升";
    case "swamp-water":
      return "困";
    case "water-wind":
      return "井";
    case "swamp-fire":
      return "革";
    case "fire-wind":
      return "鼎";
    case "thunder-thunder":
      return "震";
    case "mountain-mountain":
      return "艮";
    case "wind-mountain":
      return "渐";
    case "thunder-swamp":
      return "归妹";
    case "thunder-fire":
      return "丰";
    case "fire-mountain":
      return "旅";
    case "wind-wind":
      return "巽";
    case "swamp-swamp":
      return "兑";
    case "wind-water":
      return "涣";
    case "water-swamp":
      return "节";
    case "wind-swamp":
      return "中孚";
    case "thunder-mountain":
      return "小过";
    case "water-fire":
      return "既济";
    case "fire-water":
      return "未济";
  }
}

export function allYaos(gua) {
  switch (gua) {
    case "sky-sky":
    case "乾":
      return ["初九", "九二", "九三", "九四", "九五", "上九"];
    case "land-land":
    case "坤":
      return ["初六", "六二", "六三", "六四", "六五", "上六"];
    case "water-thunder":
    case "屯":
      return ["初九", "六二", "六三", "六四", "九五", "上六"];
    case "mountain-water":
    case "蒙":
      return ["初六", "九二", "六三", "六四", "六五", "上九"];
    case "water-sky":
    case "需":
      return ["初九", "九二", "九三", "六四", "九五", "上六"];
    case "sky-water":
    case "讼":
      return ["初六", "九二", "六三", "九四", "九五", "上九"];
    case "land-water":
    case "师":
      return ["初六", "九二", "六三", "六四", "六五", "上六"];
    case "water-land":
    case "比":
      return ["初六", "六二", "六三", "六四", "九五", "上六"];
    case "wind-sky":
    case "小畜":
      return ["初九", "九二", "九三", "六四", "九五", "上九"];
    case "sky-swamp":
    case "履":
      return ["初九", "九二", "六三", "九四", "九五", "上九"];
    case "land-sky":
    case "泰":
      return ["初九", "九二", "九三", "六四", "六五", "上六"];
    case "sky-land":
    case "否":
      return ["初六", "六二", "六三", "九四", "九五", "上九"];
    case "sky-fire":
    case "同人":
      return ["初九", "六二", "九三", "九四", "九五", "上九"];
    case "fire-sky":
    case "大有":
      return ["初九", "九二", "九三", "九四", "六五", "上九"];
    case "land-mountain":
    case "谦":
      return ["初六", "六二", "九三", "六四", "六五", "上六"];
    case "thunder-land":
    case "豫":
      return ["初六", "六二", "六三", "九四", "六五", "上六"];
    case "swamp-thunder":
    case "随":
      return ["初九", "六二", "六三", "九四", "九五", "上六"];
    case "mountian-wind":
    case "蛊":
      return ["初六", "九二", "九三", "六四", "六五", "上九"];
    case "land-swamp":
    case "临":
      return ["初九", "九二", "六三", "六四", "六五", "上六"];
    case "wind-land":
    case "观":
      return ["初六", "六二", "六三", "六四", "九五", "上九"];
    case "fire-thunder":
    case "噬嗑":
      return ["初九", "六二", "六三", "九四", "六五", "上九"];
    case "mountian-fire":
    case "贲":
      return ["初九", "六二", "九三", "六四", "六五", "上九"];
    case "mountian-land":
    case "剥":
      return ["初六", "六二", "六三", "六四", "六五", "上九"];
    case "land-thunder":
    case "复":
      return ["初九", "六二", "六三", "六四", "六五", "上六"];
    case "sky-thunder":
    case "无妄":
      return ["初九", "六二", "六三", "九四", "九五", "上九"];
    case "mountian-sky":
    case "大畜":
      return ["初九", "九二", "九三", "六四", "六五", "上九"];
    case "mountian-thunder":
    case "颐":
      return ["初九", "六二", "六三", "六四", "六五", "上九"];
    case "swamp-wind":
    case "大过":
      return ["初六", "九二", "九三", "九四", "九五", "上六"];
    case "water-water":
    case "坎":
      return ["初六", "九二", "六三", "六四", "九五", "上六"];
    case "fire-fire":
    case "离":
      return ["初九", "六二", "九三", "九四", "六五", "上九"];
    case "swamp-mountain":
    case "咸":
      return ["初六", "六二", "九三", "九四", "九五", "上六"];
    case "thunder-wind":
    case "恒":
      return ["初六", "九二", "九三", "九四", "六五", "上六"];
    case "sky-mountain":
    case "遁":
      return ["初六", "六二", "九三", "九四", "九五", "上九"];
    case "thunder-sky":
    case "大壮":
      return ["初九", "九二", "九三", "九四", "六五", "上六"];
    case "fire-land":
    case "晋":
      return ["初六", "六二", "六三", "九四", "六五", "上九"];
    case "land-fire":
    case "明夷":
      return ["初九", "六二", "九三", "六四", "六五", "上六"];
    case "wind-fire":
    case "家人":
      return ["初九", "六二", "九三", "六四", "九五", "上九"];
    case "fire-swamp":
    case "睽":
      return ["初九", "九二", "六三", "九四", "六五", "上九"];
    case "water-mountain":
    case "蹇":
      return ["初六", "六二", "九三", "六四", "九五", "上六"];
    case "thunder-water":
    case "解":
      return ["初六", "九二", "六三", "九四", "六五", "上六"];
    case "mountain-swamp":
    case "损":
      return ["初九", "九二", "六三", "六四", "六五", "上九"];
    case "wind-thunder":
    case "益":
      return ["初九", "六二", "六三", "六四", "九五", "上九"];
    case "swamp-sky":
    case "夬":
      return ["初九", "九二", "九三", "九四", "九五", "上六"];
    case "sky-wind":
    case "姤":
      return ["初六", "九二", "九三", "九四", "九五", "上九"];
    case "swamp-land":
    case "萃":
      return ["初六", "六二", "六三", "九四", "九五", "上六"];
    case "land-wind":
    case "升":
      return ["初六", "九二", "九三", "六四", "六五", "上六"];
    case "swamp-water":
    case "困":
      return ["初六", "九二", "六三", "九四", "九五", "上六"];
    case "water-wind":
    case "井":
      return ["初六", "九二", "九三", "六四", "九五", "上六"];
    case "swamp-fire":
    case "革":
      return ["初九", "六二", "九三", "九四", "九五", "上六"];
    case "fire-wind":
    case "鼎":
      return ["初六", "九二", "九三", "九四", "六五", "上九"];
    case "thunder-thunder":
    case "震":
      return ["初九", "六二", "六三", "九四", "六五", "上六"];
    case "mountain-mountain":
    case "艮":
      return ["初六", "六二", "九三", "六四", "六五", "上九"];
    case "wind-mountain":
    case "渐":
      return ["初六", "六二", "九三", "六四", "九五", "上九"];
    case "thunder-swamp":
    case "归妹":
      return ["初九", "九二", "六三", "九四", "六五", "上六"];
    case "thunder-fire":
    case "丰":
      return ["初九", "六二", "九三", "九四", "六五", "上六"];
    case "fire-mountain":
    case "旅":
      return ["初六", "六二", "九三", "九四", "六五", "上九"];
    case "wind-wind":
    case "巽":
      return ["初六", "九二", "九三", "六四", "九五", "上九"];
    case "swamp-swamp":
    case "兑":
      return ["初九", "九二", "六三", "九四", "九五", "上六"];
    case "wind-water":
    case "涣":
      return ["初六", "九二", "六三", "六四", "九五", "上九"];
    case "water-swamp":
    case "节":
      return ["初九", "九二", "六三", "六四", "九五", "上六"];
    case "wind-swamp":
    case "中孚":
      return ["初九", "九二", "六三", "六四", "九五", "上九"];
    case "thunder-mountain":
    case "小过":
      return ["初六", "六二", "九三", "九四", "六五", "上六"];
    case "water-fire":
    case "既济":
      return ["初九", "六二", "九三", "六四", "九五", "上六"];
    case "fire-water":
    case "未济":
      return ["初六", "九二", "六三", "九四", "六五", "上九"];
  }
}

export function answer(guaYao) {
  switch (guaYao) {
    case "乾初九":
      return "潜藏的龙在深渊 暂时无法施展";
    case "乾九二":
      return "龙正在走出低谷 运用德行寻求机会（有利于大才大德的是出世）";
    case "乾九三":
      return "龙虽处境艰难 但坚持不懈 不断努力 即使遇到危险 也可避祸";
    case "乾九四":
      return "龙跳进深渊 伺机而动 没有灾难 时而上跃 时而潜退";
    case "乾九五":
      return "龙在天空中飞 大有所为";
    case "乾上九":
      return "升腾到极限的龙 会有灾祸之困";
    case "坤初六":
      return "阴冷天气逐渐形成 要遵循规律向前推进 寒冬将至";
    case "坤六二":
      return "具有一定美德 行事都是有利的"; // @TODO
    case "坤六三":
      return "具备美好品德 可以正固 事情起初无所发展 但最后有好的结果";
    case "坤六四":
      return "谨言慎行 就会避免灾祸";
    case "坤六五":
      return "穿着黄色的裙裳 大吉大利";
    case "坤上六":
      return "人走到了群困的绝境 有灾祸"; // @TODO
    case "屯初九":
      return "虽然徘徊难进 但志行贞正 可坚持以退为进的策略";
    case "屯六二":
      return "首次出行 徘徊难进 女性十年才能孕育 前进艰难 现象较为反常";
    case "屯六三":
      return "放弃前行 若一意孤行 会有灾祸";
    case "屯六四":
      return "乘马的人纷纷而来 有婚配的欲求 会心想事成";
    case "屯九五":
      return "囤积资源 少囤积有利 过度囤积会有灾祸";
    case "屯上六":
      return "乘马的人纷纷而来 悲伤悲痛的情况发生";
    case "蒙初六":
      return "愚昧的初期 有利于用刑法惩治坏人 并且给冤屈者脱去枷锁 如果不专心学习去做事 将会带来困境"; // @TODO
    case "蒙九二":
      return "包容愚昧 和 娶妻 吉祥 儿子可以持家了";
    case "蒙六三":
      return "不适合娶这个女人为妻 因为此女子会遇男色而失身 这种行为不好导致不适合结婚 结果也不会好";
    case "蒙六四":
      return "被蒙昧无知的人所困惑 最终会有灾难";
    case "蒙六五":
      return "愚昧无知的人接受启发 吉兆";
    case "蒙上九":
      return "惊醒愚昧无知的人 不宜行为过当 不利于做贼寇 有利于防御贼寇"; // @TODO
    case "需初九":
      return "在郊野中等待 适宜持之以恒 可避免灾祸";
    case "需九二":
      return "身处沙地 虽然早到校人的责难 但最终是吉利的";
    case "需九三":
      return "在泥泞中行走 招致贼寇前来";
    case "需六四":
      return "身处血泊中 需要尽快逃离险境";
    case "需九五":
      return "在享用酒食中等待 正固吉祥";
    case "需上六":
      return "进入洞穴 虽然会看到不速之客 但尊敬他们 最后获得吉祥";
    case "讼初六":
      return "不要长期困于官司 减少口舌是非 最终获得吉祥";
    case "讼九二":
      return "官司失利后 应回家躲避 逃到小国 息事宁人";
    case "讼六三":
      return "应该安享旧日俸禄 不要起贪念 若是辅佐君王做事 包括从事公务员工作 即使取得了成就 也不要居功自傲";
    case "讼九四":
      return "不再起诉 安于现状 正固吉祥";
    case "讼九五":
      return "官司得到了公正的判决 吉祥";
    case "讼上九":
      return "得到官位 但会多次失去 建议停止诉讼 议和"; // @TODO
    case "师初六":
      return "军纪严明 否则有灾祸";
    case "师九二":
      return "率军出征 正固 不偏不倚 可获吉祥 无灾祸 君王会多次嘉奖";
    case "师六三":
      return "士兵从战场上运辉尸体 凶险";
    case "师六四":
      return "率军及时撤退 可避祸";
    case "师六五":
      return "田间有动物 象征着有利于发表观点 无灾祸 有德的人可统帅军队 无德的人会战败 即使正固也有凶相";
    case "师上六":
      return "天子颁布诏命 论功封爵 需要重用君子远离小人";
    case "比初六":
      return "以诚待人 会得到更多的朋友 吉祥";
    case "比六二":
      return "加强内部团结 来辅佐君主 吉祥";
    case "比六三":
      return "与匪为友 交不到合适的朋友"; // @TODO
    case "比六四":
      return "交往中相互信任 加强团结 吉祥";
    case "比九五":
      return "光明正大交往 君王用三趣之礼狩猎 失去前面的禽兽 老百姓不怕君王 吉祥"; // @TODO
    case "比上六":
      return "结交不到首领 凶相";
    case "小畜初九":
      return "重复自己的做事风格 无灾且吉祥";
    case "小畜九二":
      return "被牵连而返回本位 吉祥";
    case "小畜九三":
      return "大车脱落了辐条 夫妻反目失和";
    case "小畜六四":
      return "有诚信 不再忧虑 从恐惧中走出来 无灾祸";
    case "小畜九五":
      return "诚信相连 与邻居共享富裕";
    case "小畜上九":
      return "所需雨水已积满 积德载物 日月同辉 出战凶险"; // @TODO
    case "履初九":
      return "衣着朴实无华 无灾祸";
    case "履九二":
      return "走在平坦的大道上 安然的人占问此卦吉祥";
    case "履六三":
      return "眼睛快要瞎了 但勉强能看到一点点 腿跛了 但勉强能走几步 不小心踩在老虎尾巴上 老虎回头就咬人 凶险 勇敢的武士要竭力为君主效劳";
    case "履九四":
      return "踩在老虎尾巴上 恐惧最后退去 吉祥";
    case "履九五":
      return "奋不顾身 冒然前行 占卜此卦者 凶";
    case "履上九":
      return "不断反思审视自己的所作所为 最终吉祥";
    case "泰初九":
      return "拔出的茅草离开地面向上是吉利征兆 出征吉祥";
    case "泰九二":
      return "有包容大川似的宽广胸怀 可以徒步涉过大河急流 礼贤下士 对远方的贤德之人也不遗弃 不结成小团体 不结党营私 能够辅佐公正有道德的君主";
    case "泰九三":
      return "处境艰难 正固 没有灾祸 不要怕不能取信于人 在饮食方面有口福之吉";
    case "泰六四":
      return "像小鸟一样翩翩起舞 因不与邻居共享富有 互相不加戒备 以诚相待"; // @TODO
    case "泰六五":
      return "帝乙嫁女 因此而获得福泽 最为吉祥";
    case "泰上六":
      return "城墙倒塌在城壕里 不宜用兵 在城邑中祷告天命 占问必艰难之兆";
    case "否初六":
      return "拔出的茅草离开地面向上 吉利征兆 有为";
    case "否六二":
      return "被包容并顺从承受尊者 小人可获吉祥 君子则需要躲避 通达"; // @TODO
    case "否六三":
      return "被包容而居于下位 最终招致羞辱";
    case "否九四":
      return "得到君王授命 没有灾祸 众人依附 共享福禄";
    case "否九五":
      return "君子不用躲避 君子可获吉祥 将要灭亡 将要灭亡 白自己拴在大桑树上 就会安然无恙";
    case "否上九":
      return "苦尽甘来 皆大欢喜";
    case "同人初九":
      return "走出大门 与人亲近 无灾祸";
    case "同人六二":
      return "亲近同族的人 必然艰难";
    case "同人九三":
      return "在草丛中设好伏兵 登高望远 三年不能发动战争";
    case "同人九四":
      return "占据城头之上 自行退兵而不进攻 可获吉祥";
    case "同人九五":
      return "与人同心同德 先哭后笑 大军会师 庆祝胜利";
    case "同人上九":
      return "与人在郊外亲善和睦 不会有困厄";
    case "大有初九":
      return "有人交往 不涉及利害 自然不会招致灾祸 须知 需要经历艰辛 才可避免灾祸";
    case "大有九二":
      return "用大车载物 无论去哪里 都不会有灾祸";
    case "大有九三":
      return "公候按时向天子进贡 小人做不到这一点"; // @TODO
    case "大有九四":
      return "不骄不躁 无灾祸";
    case "大有六五":
      return "胸怀坦荡 上下以诚相待 威严自显 可获吉祥";
    case "大有上九":
      return "会得到上天的帮助 吉祥而无不利";
    case "谦初六":
      return "谦虚而富有美德的君子 梵语大江大河 可获吉祥";
    case "谦六二":
      return "谦虚之名传扬外界 正固吉祥";
    case "谦九三":
      return "有功而谦虚 君子保持谦逊 正固吉祥";
    case "谦六四":
      return "发扬谦逊美德 行事无往不利";
    case "谦六五":
      return "与邻国同遭侵略 则需共同应战 如此无往不利";
    case "谦上六":
      return "谦虚之名传扬外界 利于兴兵征伐 占领新的领地";
    case "豫初六":
      return "因喜悦而闻名 有凶险"; // @TODO
    case "豫六二":
      return "德行坚贞胜过磐石 不浪费生命 正固吉祥"; // @TODO
    case "豫六三":
      return "小人媚上以逸乐惑主 会有忧悔 悔恨太迟会更后悔"; // @TODO
    case "豫九四":
      return "喜乐自来 会有大的收获 不比猜疑 像簪子聚拢头发一样将朋友们聚集在一起";
    case "豫六五":
      return "占问疫病吉凶 得此卦者 会病期长 但不会死亡";
    case "豫上六":
      return "已处在天昏地暗的局面 去沉溺于寻欢作乐 十分危险， 若改弦更张 可避免灾祸";
    case "随初九":
      return "官位有变动 利于正固 吉祥 出门交友不会有过失"; // @TODO
    case "随六二":
      return "依附小人会失去德高望重的人";
    case "随六三":
      return "依附德高望重的人会失去小人 跟随有追求的人会有所得 利于正固";
    case "随九四":
      return "跟随别人去获得利益 即便守正道 也是凶 有诚信的做事 光明磊落 怎么会有错";
    case "随九五":
      return "真诚的随从嘉言善行 吉祥";
    case "随上六":
      return "先拘押起来 后又捆绑起来 成为君王祭祀在西山的牺牲品"; // @TODO
    case "蛊初六":
      return "改正父亲的过失 有了这样的儿子 父辈以及父辈以上可避免灾祸 即使开始会有危险 最后可获得吉祥";
    case "蛊九二":
      return "改正母亲的过失 不能固守专断"; // @TODO
    case "蛊九三":
      return "改正父亲的过失 即便遭遇小困难 但无大灾";
    case "蛊六四":
      return "姑息纵容父亲的过错 往往出现艰难";
    case "蛊六五":
      return "改正父亲的过失 会得到赞誉";
    case "蛊上九":
      return "不侍奉王侯 专心自己的领域是高尚的"; // @TODO
    case "临初九":
      return "心怀感化之心降临到民众 可获吉祥";
    case "临九二":
      return "心怀感化之心降临到民众 吉祥 无所不利";
    case "临六三":
      return "居高临下 靠甜言蜜语督导 无利 已然知晓自己的过失 无灾祸"; // @TODO
    case "临六四":
      return "亲子体察民情 无灾祸";
    case "临六五":
      return "以聪明才智实行督导 可以视为王道 可获吉祥";
    case "临上六":
      return "敦厚宽仁 体察民情 可获吉祥 无灾祸";
    case "观初六":
      return "以孩童的视角观察事物 小人没有灾祸 君子会有灾祸";
    case "观六二":
      return "暗中窥探观察 适宜女子正固";
    case "观六三":
      return "观察别人对自己的反应 查醒自己的言行 审时度势 小心谨慎的进退"; // @TODO
    case "观六四":
      return "观察一个国家的风土人情 适宜用宾客之力朝见君王";
    case "观九五":
      return "观察同国的民情 君子无灾祸"; // @TODO
    case "观上九":
      return "观察外国的民情 君子无灾祸";
    case "噬嗑初九":
      return "脚上带上木枷 损伤了脚趾 无灾祸";
    case "噬嗑六二":
      return "咬食肥肉 使鼻子陷入肉中 无灾祸";
    case "噬嗑六三":
      return "咬腊肉干 中了毒 小有不顺 无灾祸";
    case "噬嗑九四":
      return "施用刑罚惩戒犯人 像咬带骨的肉一样困难 具有铜箭一样的刚正之气 有利于在艰难的时候正固 可获吉祥"; // @TODO
    case "噬嗑六五":
      return "吃风干的肉 得到黄金 正固思危 无灾祸";
    case "噬嗑上九":
      return "肩带木枷遮住耳朵 有凶险";
    case "贲初九":
      return "修饰脚趾弃车步行而走";
    case "贲六二":
      return "修饰胡须 为了与上司一起"; // @TODO
    case "贲九三":
      return "修饰过后再加以润色 长期正固吉祥";
    case "贲六四":
      return "修饰得如此雅致 骑的白马有如此纯洁无暇 不是盗寇 是来求婚的佳人";
    case "贲六五":
      return "修饰山丘园林 用了大量的布帛 艰难 但最终会获得吉祥";
    case "贲上九":
      return "以白色为装饰 无灾祸";
    case "剥初六":
      return "剥落床体从床脚开始 致使床腿损坏 有凶险";
    case "剥六二":
      return "剥落床体从床头开始 致使床头损坏 有凶险";
    case "剥六三":
      return "剥落 无灾祸";
    case "剥六四":
      return "剥蚀到床板 有凶险";
    case "剥六五":
      return "像鱼鲜排成一行一样 以宫人的身份受到宠幸 无往不利";
    case "剥上九":
      return "不吃硕大的果子 君子得到民众的拥戴 小人遭到覆巢之灾";
    case "复初九":
      return "行而未远就适时而返 没有造成很大的悔意 大吉大利";
    case "复六二":
      return "停止返回 可获吉祥";
    case "复六三":
      return "频繁的返回 艰难 无灾祸";
    case "复六四":
      return "在行列中能独自返回"; // @TODO
    case "复六五":
      return "敦厚笃诚的返回 没有悔恨";
    case "复上六":
      return "迷失在返回的途中 有凶险 会有灾难 出兵打仗 最终惨败凶险来自于国君 十年不可以出战"; // @TODO
    case "无妄初九":
      return "不妄为 按照自己的心志 所行 吉祥";
    case "无妄六二":
      return "不耕耘却有收获 不开荒却有良田 则有利于有所作为";
    case "无妄六三":
      return "意想不到的灾祸到来 路人牵走被绳子拴住的耕牛 城里人有灾祸";
    case "无妄九四":
      return "可以正固 无灾祸";
    case "无妄九五":
      return "得了意想不到的疾病 不比用药治疗 自会痊愈";
    case "无妄上九":
      return "切勿妄为 将有灾祸 无益处";
    case "大畜初九":
      return "有危险 适宜停止";
    case "大畜九二":
      return "车身与车轴相分离";
    case "大畜九三":
      return "骏马互相追逐 有利于艰难中正固 每日演练战车防卫 适宜有所作为";
    case "大畜六四":
      return "在牛的角上拴上一根木头 大吉大利";
    case "大畜六五":
      return "是烈性的猪长出牙齿 可获吉祥"; // @TODO
    case "大畜上九":
      return "四通八达的道路 亨通顺畅";
    case "颐初九":
      return "扔下属于你的灵龟 看我吃东西 有凶险"; // @TODO
    case "颐六二":
      return "颠倒颐精养气之道 像高处寻求颐养 兴兵作战会有风险"; // @TODO
    case "颐六三":
      return "违反颐精养气之道 即使正固也有凶险 十年内不能施展才能 无益处";
    case "颐六四":
      return "颠倒颐精养气之道 可获吉祥 像老虎一样凝视 急欲不断的追逐 无灾祸"; // @TODO
    case "颐六五":
      return "违反规律 在家正固 可获吉祥 不可以跨越大江大河";
    case "颐上九":
      return "鲸油颐精养气之道 虽然艰难 可获吉祥 利于渡过大江大河"; // @TODO
    case "大过初六":
      return "用洁净的茅草铺地以陈设祭品 无灾祸";
    case "大过九二":
      return "枯树发芽 老翁娶新妻 无所不利";
    case "大过九三":
      return "房梁弯曲 有凶险";
    case "大过九四":
      return "房梁隆起 可获吉祥 如果有意外发生 则行事艰难";
    case "大过九五":
      return "枯树开花 老妇与少男结合 无灾祸 无赞誉";
    case "大过上六":
      return "徒步过河 被水淹灭了 头顶 有凶险 无灾祸";
    case "坎初六":
      return "在重重险阻之中 掉入陷阱 有凶险";
    case "坎九二":
      return "在陷阱中经历危险 谋求小事 会有获得";
    case "坎六三":
      return "来来回回都处于险难之中 陷穴既险也深 一旦落入陷阱之中 暂时无法施展才能";
    case "坎六四":
      return "将一杯薄酒 两筐淡食 用瓦罐装起来 用窗口收到信约 最后无灾祸"; // @TODO
    case "坎九五":
      return "陷穴尚未满溢 到需要稳定时则艰难自平 无灾祸"; // @TODO
    case "坎上六":
      return "用绳索将犯人捆绑起来放入荆棘草丛之中 三年不让解脱 比有凶险";
    case "离初九":
      return "步子错乱 但保持谨慎恭敬 无灾祸";
    case "离六二":
      return "有黄色附于物 大吉大利";
    case "离九三":
      return "太阳快要落山 如果不能边打击瓦罐边唱歌 就会发出垂老之人的哀叹 有凶险";
    case "离九四":
      return "突如其来 如同火焰熊熊燃烧 会有生命危险 会被抛弃"; // @TODO
    case "离六五":
      return "眼泪涌出的样子 悲戚哀叹的样子 可获吉祥"; // @TODO
    case "离上九":
      return "君王用贤人出兵征伐 对能够斩杀敌方首领的人给予嘉奖 不复活一般的随从 无灾祸"; // @TODO
    case "咸初六":
      return "感应发生在脚上的大拇指 因势而动";
    case "咸六二":
      return "感应发生在小腿肚 有凶险 在家里不出来 可获吉祥";
    case "咸九三":
      return "感应发生在大腿 执迷于盲目追随别人 步履维艰";
    case "咸九四":
      return "可获吉祥 危难窘境会消失 即使心意不安 思绪不绝 朋友最后会顺从你的意愿";
    case "咸九五":
      return "感应发生在脊背上 不会有后悔";
    case "咸上六":
      return "感应发生在 口舌 牙床 面颊 都会因势而动";
    case "恒初六":
      return "有所追求 持续追求过于长 即使正固也有凶险 无益处";
    case "恒九二":
      return "窘境会消失";
    case "恒九三":
      return "不能长期保持美德 有时会蒙受羞辱 行事艰难";
    case "恒九四":
      return "田间没有禽兽";
    case "恒六五":
      return "长久的保持美德正固 女人可获得吉祥 男人会处境凶险";
    case "恒上六":
      return "震动不安 不能持之以恒 有凶险";
    case "遁初六":
      return "退避不及 落在后面 有凶险 暂时不宜作为 施展才能";
    case "遁六二":
      return "被黄牛皮绳捆绑 没有人能够逃脱";
    case "遁九三":
      return "由于被牵累而难以逃脱 会生病 有危险 畜养奴仆和侍妾 可获吉祥";
    case "遁九四":
      return "行事有利于逃跑时 君子可获吉祥 小人则难以挣脱";
    case "遁九五":
      return "选择最佳时机退出 可获吉祥";
    case "遁上九":
      return "远走高飞 完全退避 无所不利";
    case "大壮初九":
      return "脚趾变粗壮 出兵征伐 有凶险 需要诚信"; // @TODO
    case "大壮九二":
      return "正固吉祥";
    case "大壮九三":
      return "小人靠力量 君子不这样 正固有危险 公山羊用角顶篱笆 角被缠住"; // @TODO
    case "大壮九四":
      return "正固吉祥 忧悔消除 藩篱被冲破 羊角被解脱出来 像大车的车轮一样结实"; // @TODO
    case "大壮六五":
      return "在田边丢失山羊 不会有忧悔";
    case "大壮上六":
      return "公山羊用角顶篱笆 不能退后 不能前进 无益处 艰难过后可获吉祥";
    case "晋初六":
      return "晋升中遭遇挫折阻碍 正固吉祥 暂时没有收到信任 无灾祸";
    case "晋六二":
      return "晋升中遭遇忧愁 正固吉祥 将会从祖母那里受到宏大的恩泽";
    case "晋六三":
      return "获得众人的信任 忧悔消除";
    case "晋九四":
      return "今生如同 老鼠一样 即贪婪有没有一技之长 正固有危险";
    case "晋六五":
      return "忧悔消除 无需再为得失而忧虑 有所作为可获吉祥 无所不利";
    case "晋上九":
      return "晋升到了顶点 用征讨小国而建立功勋 危中有吉 无灾祸 正固有难";
    case "明夷初九":
      return "光明遭到损伤时 就像飞鸟低垂着翅膀 惊慌飞行 如同君子急行 三天没有吃饭 一旦有所作为 会受到主人的责备"; // @TODO
    case "明夷六二":
      return "光明遭到损伤时 伤到左大腿 如果有良马来救 可获吉祥";
    case "明夷九三":
      return "光明遭到损伤时 在南方狩猎 获得丰厚 不可操之过急 正固"; // @TODO
    case "明夷六四":
      return "进入近臣内侧 洞悉光明损伤的内情 走出院子"; // @TODO
    case "明夷六五":
      return "像箕子受难时一样 正固";
    case "明夷上六":
      return "不光明 晦暗 起初像天空中升起 最后又落到地上";
    case "家人初九":
      return "持家能够预防不测之灾 忧悔消亡";
    case "家人六二":
      return "不可随心所欲地追求外部事业与功名 而是尽心竭力的料理家中的饮食起居 可获吉祥";
    case "家人九三":
      return "治家过于严厉常常因为过分训斥家人而感到后悔 先凶后吉 夫人孩子嬉笑 不加约束 最后会有灾祸";
    case "家人六四":
      return "家庭富裕 大吉大利";
    case "家人九五":
      return "君王治国如治家一样 不必忧虑 可获吉祥";
    case "家人上九":
      return "心存诚信 严于持家 最后可获吉祥";
    case "睽初九":
      return "忧悔消除 丢失了的马 不必去追逐 马自会返回 谨慎谦虚地对待与自己对立的人 无灾祸";
    case "睽九二":
      return "在小巷中遇到主人 无灾祸";
    case "睽六三":
      return "看见大车艰难前行 驾车的牛受到牵制无法前行 驾车的人受到了 墨刑和劓刑 虽然历经磨难 但最终会有美好结局";
    case "睽九四":
      return "因心志与众人不和而陷入孤立 但刚好遇到一位贵人 交往中以诚相待 有凶险 无灾祸"; // @TODO
    case "睽六五":
      return "忧悔消除 与族人一起吃肉 前进的路上还会有什么灾祸呢";
    case "睽上九":
      return "处于极其孤立的状态 恍惚之间看到一头背上涂满淤泥的猪 又看到一辆载有一车像鬼一样的人 开始想拉开弓箭准备射击 后来又放下弓箭 原来是迎亲的队伍 有所行动 遇到雨可获吉祥";
    case "蹇初六":
      return "有所行动 尽管行事艰难 但归来满载荣誉";
    case "蹇六二":
      return "君王与大臣在危难中行走 他们并不是为了自己"; // @TODO
    case "蹇九三":
      return "在外行动会遭遇艰难 不如及早返回";
    case "蹇六四":
      return "在外行动会遭遇艰难 返回时有车乘";
    case "蹇九五":
      return "行事十分艰难 朋友们纷纷来帮助";
    case "蹇上六":
      return "外出遭遇艰难 归来硕果累累可获吉祥 有利于大德大才的人出现";
    case "解初六":
      return "无灾祸";
    case "解九二":
      return "打猎时获得三只狐狸 又获得黄色箭矢 正固吉祥";
    case "解六三":
      return "背负着重物出行 招致贼寇抢劫 即使正固 也会有灾祸";
    case "解九四":
      return "像解开被绑的拇指一般摆脱小人的纠缠 朋友才会心怀诚信前来帮助";
    case "解六五":
      return "君王被束缚又得到解脱 可获吉祥 能够用诚信感化小人";
    case "解上六":
      return "王公用弓箭在高处射下一只大隼 并且捕获了 无往不利";
    case "损初九":
      return "停止自己的事情 尽快帮助他人 无灾祸 要酌情量力而为"; // @TODO
    case "损九二":
      return "有利于正固 出兵征伐有凶险 不要减少 要增加"; // @TODO
    case "损六三":
      return "三个人一起前行 有一个人会受到伤害 一个人独行 就会遇到志同道合的朋友";
    case "损六四":
      return "尽快解决自身疾患 迎接喜庆的到来 无灾祸";
    case "损六五":
      return "有人送来价值连城的神龟 不要推辞 大吉大利";
    case "损上九":
      return "不要减少 要增加 无灾祸 正固吉祥 适宜有所行动 会得到无私忘家的臣子"; // @TODO
    case "益初九":
      return "有利于大展宏图 大吉大利 无灾祸";
    case "益六二":
      return "有人送来价值连城的神龟 不要推辞 恒久之事 正固吉祥 君王祭祀先帝 可获吉祥";
    case "益六三":
      return "将得到的好处来救助凶险之事 无灾祸 要以诚相待 时刻像手执玉圭向王公告急求助那样谨慎";
    case "益六四":
      return "执持守中正道谨慎行事 得到王公信任 有利于凭此来完成迁都利民的大业";
    case "益九五":
      return "心中有诚信 不用占问 就是 大吉大利 天下人一定会以仁爱之心回报我的仁爱之德";
    case "益上九":
      return "没有得到增益 或者受到攻击 树立决心不够坚定 有凶险"; // @TODO
    case "夬初九":
      return "脚趾前部粗壮 冒然前行不会取胜 会招致灾祸";
    case "夬九二":
      return "受到惊吓发出声音 深夜有军队经过 不用担心";
    case "夬九三":
      return "面颊之间的骨头强壮 有凶险 君子毅然前行 独自遇雨受淋雨水淋湿了衣服 尽管有怨怒 无灾祸";
    case "夬九四":
      return "臀部无皮 行走艰难 如果能牵羊而行 忧悔消除 无耐听了这话的人并不相信";
    case "夬九五":
      return "细角山羊毅然前行 守中正道 无灾祸";
    case "夬上六":
      return "不要大声发出声音 因为凶险最终会到来";
    case "姤初六":
      return "紧紧缚在金属织具上 正固吉祥 急于有所行动 会遭遇到凶险 就像猪被捆绑住竭力挣扎一样";
    case "姤九二":
      return "厨房有鱼 无灾祸 不适宜宴请宾客";
    case "姤九三":
      return "屁股上没有皮肤 走路会很艰难 有危险 但无大灾祸";
    case "姤九四":
      return "厨房无鱼 会引发凶险";
    case "姤九五":
      return "用杞树萌护树下的瓜果 象征着蕴藏彰美之徳 会喜从天降"; // @TODO
    case "姤上九":
      return "走入空荡的角落里 凶险 无灾祸";
    case "萃初六":
      return "心怀诚信但没有坚持到最后 出现了混乱与新的聚集 如果发出大的声音 就在此时占卜到 一握之数 随后大笑 不用忧虑 有所行动无灾祸"; // @TODO
    case "萃六二":
      return "迎来吉祥 无灾祸 心怀诚信有利于祭祀求福";
    case "萃六三":
      return "由于汇聚而产生叹息 无益处 有所行动无灾祸 小凶险";
    case "萃九四":
      return "大的吉祥 无灾祸";
    case "萃九五":
      return "汇聚而适得其位 无灾祸 但还不能获取众人的信任 开始并持续正固 忧悔消除";
    case "萃上六":
      return "悲伤叹息又痛哭流涕 没灾祸";
    case "升初六":
      return "不断长进上升 大的吉祥";
    case "升九二":
      return "心怀诚信有助于祭祀求福 无灾祸";
    case "升九三":
      return "上升到空旷的城邑 如入无人之境";
    case "升六四":
      return "君王来到岐山祭祀神灵 可获吉祥 无灾祸";
    case "升六五":
      return "正固吉祥 步步高升";
    case "升上六":
      return "深夜还要上升 有利于停止上升而正固";
    case "困初六":
      return "困坐在树干上无法安身 只得退居幽暗的山谷里 三年不能露面";
    case "困九二":
      return "喝醉了酒 大红祭祀衣服刚刚送来 正好用来祭祀 此时出兵征伐有凶险 无灾祸";
    case "困六三":
      return "被困到乱石之中 靠着有刺的荆棘爬了出来 回到家中 看不到妻子 有凶险";
    case "困九四":
      return "迈着步子缓缓走来 被一辆豪华的大车挡住了去路 有麻烦 但会有好的结果";
    case "困九五":
      return "使用割鼻断足刑罚来治理众人 困难是因红色祭服引起 因而就渐渐的不再穿了 有利于祭祀";
    case "困上六":
      return "被葛藤纠缠的惶恐不安有所行动会感到后悔 应该幡然悔悟 出兵征伐 可获吉祥";
    case "井初六":
      return "井底污泥淤积 井水已经不能再食用 井枯树死 飞鸟再也不来栖息";
    case "井九二":
      return "井中积水处被当作捉鱼的场所 用来打水的瓦罐破漏不能再用";
    case "井九三":
      return "井中淤泥已被清除仍然没有人取水食用 让人心生悲伤 井水已可食用 应该尽快来取水 君王圣明 与臣民共享恩泽"; // @TODO
    case "井六四":
      return "修整井壁 无灾祸";
    case "井九五":
      return "井水清澈明净 就像甘甜凉爽的泉水一样 可供饮用";
    case "井上六":
      return "修整水井的事已然完成 无需再盖井口 此时心怀诚信 大吉大利";
    case "革初九":
      return "用黄牛皮绳牢牢拴住 以免轻举妄动";
    case "革六二":
      return "到了己日断然进行改革 出兵讨伐可获吉祥 无灾祸";
    case "革九三":
      return "出兵征伐会有凶险 即使正固也有危险 变革要集思广益 行动时要有诚信";
    case "革九四":
      return "忧悔消除 行动时要有诚信 改朝换代 顺天应命 可获吉祥";
    case "革九五":
      return "有才能的人变革时气势会像老虎一样威猛 不必占卜 也能光大诚信的美德"; // @TODO
    case "革上六":
      return "有才能的人变革时行动会像豹子一样迅速 小人改变往日的面目 出兵讨伐会有凶险 居家守中 正固吉祥";
    case "鼎初六":
      return "大鼎翻倒 其足向上 适宜倒掉无用之物 就如同妻妾生子 其妾因子而被扶作正室 无灾祸";
    case "鼎九二":
      return "鼎中盛满食物 容易招来敌对者的嫉妒 不能靠近我 可获吉祥"; // @TODO
    case "鼎九三":
      return "鼎的耳朵被破坏了 无法被移动 鼎里的山鸡汤也喝不成了 待到阴阳调和 润雨出现才能消除悔恨 最终可获吉祥";
    case "鼎九四":
      return "大鼎那堪重负导致鼎足断折 王公的美食都被倾倒出来 鼎身沾满污物 有凶险";
    case "鼎六五":
      return "大鼎配备上黄色的耳饰 鼎耳配备上铜制的吊环 有利于正固";
    case "鼎上九":
      return "鼎耳配有玉制的吊环 大为吉利 无所不利";
    case "震初九":
      return "雷霆极响 震的万物惊惶恐惧 虽有有谈笑风生 吉祥";
    case "震六二":
      return "雷霆极响待来危险 丢失钱财 应该登上九重高陵 不要追逐 七天内会失而复得";
    case "震六三":
      return "雷霆震动 惊惶不安 伴随着震动前行 无灾难";
    case "震九四":
      return "雷霆震动 惊慌失措 落入泥中";
    case "震六五":
      return "雷霆震动 上下往来都有危险 但无重大损失 会有事发生";
    case "震上六":
      return "雷霆震动 瑟瑟发抖 六神无主 出兵征伐有凶险 震动不是来自于自身而是来自于旁边的人 无灾祸 婚配会有责怪之言";
    case "艮初六":
      return "抑制脚趾使其难以起步 无灾祸 有利于占问长久之事";
    case "艮六二":
      return "抑制小腿肚运动 无法举步追赶应该追随的人 心中不能舒畅"; // @TODO
    case "艮九三":
      return "抑制腰部运动 以至于撕裂了夹脊肉 凶险就像烈火烧灼 让人心急如焚";
    case "艮六四":
      return "抑制身体上部运动 无灾祸";
    case "艮六五":
      return "抑制脸颊运动 使之说话有条理 忧悔消除";
    case "艮上九":
      return "敦厚的美德压制邪欲恶念 吉祥";
    case "渐初六":
      return "鸿雁飞行渐进到了河岸边 小雁有危险 被大雁叫住 无灾祸";
    case "渐六二":
      return "鸿雁飞行渐进到了磐石上 饮食和乐 吉祥";
    case "渐九三":
      return "鸿雁飞行渐进到了小山顶上 丈夫征战未归 妻子怀孕流产 凶险之兆 但有利于抗击盗寇";
    case "渐六四":
      return "鸿雁飞行渐进到了大树上 有的落到树枝上 没灾祸";
    case "渐九五":
      return "鸿雁飞行渐进到了山丘上 妇女三年不能怀孕 但邪不压正 最终可获吉祥"; // @TODO
    case "渐上九":
      return "鸿雁飞行渐进到了小山顶上 羽毛美丽到可以用来做仪式的上用的装饰 吉祥";
    case "归妹初九":
      return "少女出嫁 妹妹作为从嫁做偏房 就像跛脚的人奋力前行 出兵征伐可获吉祥";
    case "归妹九二":
      return "视力不好的人勉强凝视 有利于安恬隐居之人占问";
    case "归妹六三":
      return "少女出嫁 姐姐作为从嫁做偏房 被遣回娘家 又以妹妹的身份从嫁做偏房"; // @TODO
    case "归妹九四":
      return "少女出嫁多次延期 迟迟未嫁 为的是等待时机出嫁";
    case "归妹六五":
      return "帝乙嫁女 正室的服装反而不如陪嫁妹妹的服装华丽 成亲之日定在既望之日 吉祥";
    case "归妹上六":
      return "新娘提着空篮子里面没有果实 新郎杀羊却未见羊血 无益处";
    case "丰初九":
      return "遇到与自己匹配的人 十日内无灾祸 前往会得到尊重"; // @TODO
    case "丰六二":
      return "草棚遮蔽很大 中午出现满天星斗 有所举动会受人猜忌 心怀诚信悔消除疑虑 吉祥"; // @TODO
    case "丰九三":
      return "丰厚遮掩了光明的幔帐 中午一片昏暗 此时折断了右臂 无灾祸";
    case "丰九四":
      return "草棚遮蔽很大 中午出现满天星斗 遇到外邦的主人 吉祥"; // @TODO
    case "丰六五":
      return "迎接光明 会带来喜庆与赞誉 吉祥";
    case "丰上六":
      return "房屋高大 遮蔽了其他人家 从门缝里往里面看 里面空无一人 三年不见有人 凶险";
    case "旅初六":
      return "外出旅行猥猥琐琐 举止多变 会招致灾祸";
    case "旅六二":
      return "旅行的人入住客店 怀里揣着钱财 得到僮仆的诚信侍奉"; // @TODO
    case "旅九三":
      return "客店失了大火 童仆也跑了 即使正固也有危险";
    case "旅九四":
      return "旅行遭遇阻碍 尽管得到了一些钱财 但心中依然不愉快";
    case "旅六五":
      return "射杀野鸡 丢了一支箭矢 但到最后获得赞誉并受到封爵";
    case "旅上九":
      return "树上的鸟烧了自己的巢穴 旅行的人先笑后大哭 田边丢了牛 凶险之兆";
    case "巽初六":
      return "进进退退 停滞不前 有利于勇敢的人占问";
    case "巽九二":
      return "过分顺从而屈居床下 若过能效仿 巫师 勤勉忙碌的样子 吉祥 无灾祸";
    case "巽九三":
      return "一而再再而三的顺从他人 有凶险";
    case "巽六四":
      return "忧悔消除 打猎时捕获了三头禽兽";
    case "巽九五":
      return "正固吉祥 忧悔消除 无所不利 起初不顺利 但最后能畅通无阻 时间是 丁日 戊日 己日 和 辛日 壬日 癸日 吉祥"; // @TODO
    case "巽上九":
      return "过分顺从而屈居床下 结果 失掉了 财产和利斧之助 即使正固也会有凶险"; // @TODO
    case "兑初九":
      return "平和喜悦的待人态度 有利于正固";
    case "兑九二":
      return "心怀诚信的待人态度 吉祥 忧悔消除";
    case "兑六三":
      return "前来求的喜悦 有凶险";
    case "兑九四":
      return "商议之中和睦欢愉 但事情没有办成 消除小毛病会有喜庆之事";
    case "兑九五":
      return "信任剥蚀阳刚的小人 有危险";
    case "兑上六":
      return "引诱别人与自己一起欢悦";
    case "涣初六":
      return "乘强壮之马去救济患难 吉祥";
    case "涣九二":
      return "大水流散 赶忙跑到 祭祀的案台 以祭告神灵祈求帮助 忧悔消除";
    case "涣六三":
      return "大水冲击自身 没有悔恨";
    case "涣六四":
      return "大水冲散了众人 大吉大利 大水冲上山陵 水势汹涌 可不是日常能够想象得到的";
    case "涣九五":
      return "像出汗一样不停的颁布君王诏命 并疏散君王聚敛的财富来救助天下百姓 无灾祸"; // @TODO
    case "涣上九":
      return "大水流散 能使得忧患消除 惊惧化解 无灾祸";
    case "节初九":
      return "不出自家内院 无灾祸";
    case "节九二":
      return "不出自家前院 有凶险";
    case "节六三":
      return "不节制自己 就会哀叹悲伤 无灾祸";
    case "节六四":
      return "安守于节俭 通达顺畅";
    case "节九五":
      return "以节俭为乐事 吉祥 有所行动必会得到奖赏";
    case "节上六":
      return "过度节俭 即使正固也有凶险 忧悔消除";
    case "中孚初九":
      return "安守诚信之徳吉祥之兆 假如有别的想法则不会安宁";
    case "中孚九二":
      return "鹤在树荫下鸣叫 小鹤应声附和 我有美酒一爵 愿与你共享其安乐";
    case "中孚六三":
      return "遭遇强大的对手 有时击鼓奋进 有时疲惫不前 有时悲愤哭泣 有时慷慨高歌";
    case "中孚六四":
      return "在既望这一天 走失了一匹好马 无灾祸";
    case "中孚九五":
      return "胸怀诚信并惦念他人 无灾祸";
    case "中孚上九":
      return "鸡鸣之声响彻天空 有凶险";
    case "小过初六":
      return "飞鸟带来了危险的兆头";
    case "小过六二":
      return "越过祖父 遇见祖母 不到君王那里 而与其臣子接触 无灾祸"; // @TODO
    case "小过九三":
      return "不严加防范 会有被杀害的危险 有凶险";
    case "小过九四":
      return "无灾祸 不要过分求进而强和他人遇合 有所行动会有危险 必须加以警惕 占问长久的事情 筮得此爻 不宜施行"; // @TODO
    case "小过六五":
      return "乌云密布却没有下雨 云气从西边郊区升起 王公狩猎射中了一只飞鸟 追到洞穴里才捕捉到";
    case "小过上六":
      return "不要过分求进而强和他人遇合 就像飞鸟容易被射中 捕获 非常凶险 这就是灾难";
    case "既济初九":
      return "牵引着车轮前行 水弄湿了车尾 无灾祸";
    case "既济六二":
      return "妇人丢失了首饰 不要寻找 七日内会失而复得";
    case "既济九三":
      return "殷商君王攻打鬼方国 历经三年才打败鬼方 事关重大 不能重用小人";
    case "既济六四":
      return "华服即将变成破衣 应当始终警惕以防灾祸";
    case "既济九五":
      return "东面的邻国杀牛举行盛大的祭祀 不入西边的邻国举行简单的祭祀那样实享天福";
    case "既济上六":
      return "水沾湿了头颅 有危险";
    case "未济初六":
      return "水沾湿了尾巴 灾祸";
    case "未济九二":
      return "向后拖拽车轮而放缓前进的速度 正固吉祥";
    case "未济六三":
      return "事业未成 出兵征伐有凶险 但适宜跨越大江大河";
    case "未济九四":
      return "正固吉祥 忧悔消除 兴兵讨伐鬼方 三年获胜而获得大国的封赏";
    case "未济六五":
      return "正固吉祥 没有悔恨 君子的光辉在于诚实守信 吉祥";
    case "未济上九":
      return "心怀诚信 来喝酒 无灾祸 水沾湿了头颅 即使心怀诚信 也会失去"; // @TODO
  }
}

export function answers(guaYao) {
  switch (guaYao) {
    case "乾初九":
      return {
        meaning: "潜藏的龙在深渊 暂时无法施展",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
        ],
        references: ["https://www.guoyi360.com/64gua01/xj/169.html"],
      };
    case "乾九二":
      return {
        meaning: "龙正在走出低谷 运用德行寻求机会 有利于大才大德的是出世",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
        ],
        references: ["https://www.guoyi360.com/64gua01/xj/170.html"],
      };
    case "乾九三":
      return {
        meaning: "龙虽处境艰难 但坚持不懈 不断努力 即使遇到危险 也可避祸",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
        ],
        references: ["https://www.guoyi360.com/64gua01/xj/496.html"],
      };
    case "乾九四":
      return {
        meaning: "龙跳进深渊 伺机而动 没有灾难 时而上跃 时而潜退",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
        ],
        references: ["https://www.guoyi360.com/64gua01/xj/499.html"],
      };
    case "乾九五":
      return {
        meaning: "龙在天空中飞 大有所为",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
        ],
        references: ["https://www.guoyi360.com/64gua01/xj/883.html"],
      };
    case "乾上九":
      return {
        meaning: "升腾到极限的龙 会有灾祸之困",
        videoUrls: [
          "https://www.youtube.com/embed/gs3XPD3JmEg",
          "https://www.youtube.com/embed/IP_4M26Se2Q",
        ],
        references: ["https://www.guoyi360.com/64gua01/xj/884.html"],
      };
    case "坤初六":
      return {
        meaning: "阴冷天气逐渐形成 要遵循规律向前推进 寒冬将至",
        videoUrls: ["https://www.youtube.com/embed/q9XjjmQo0iQ"],
        references: ["https://www.guoyi360.com/64gua02/xj/888.html"],
      };
    case "坤六二":
      return {
        meaning: "具有一定美德 行事都是有利的",
        videoUrls: ["https://www.youtube.com/embed/q9XjjmQo0iQ"],
        references: ["https://www.guoyi360.com/64gua02/xj/889.html"],
      }; // @TODO
    case "坤六三":
      return {
        meaning: "具备美好品德 可以正固 事情起初无所发展 但最后有好的结果",
        videoUrls: ["https://www.youtube.com/embed/q9XjjmQo0iQ"],
        references: ["https://www.guoyi360.com/64gua02/xj/890.html"],
      };
    case "坤六四":
      return {
        meaning: "谨言慎行 就会避免灾祸",
        videoUrls: ["https://www.youtube.com/embed/q9XjjmQo0iQ"],
        references: ["https://www.guoyi360.com/64gua02/xj/891.html"],
      };
    case "坤六五":
      return {
        meaning: "穿着黄色的裙裳 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/q9XjjmQo0iQ"],
        references: ["https://www.guoyi360.com/64gua02/xj/892.html"],
      };
    case "坤上六":
      return {
        meaning: "人走到了群困的绝境 有灾祸",
        videoUrls: ["https://www.youtube.com/embed/q9XjjmQo0iQ"],
        references: ["https://www.guoyi360.com/64gua02/xj/893.html"],
      }; // @TODO
    case "屯初九":
      return {
        meaning: "虽然徘徊难进 但志行贞正 可坚持以退为进的策略",
        videoUrls: ["https://www.youtube.com/embed/IOpg_Tt47NQ"],
        references: ["https://www.guoyi360.com/64gua03/xj/930.html"],
      };
    case "屯六二":
      return {
        meaning: "首次出行 徘徊难进 女性十年才能孕育 前进艰难 现象较为反常",
        videoUrls: ["https://www.youtube.com/embed/IOpg_Tt47NQ"],
        references: ["https://www.guoyi360.com/64gua03/xj/958.html"],
      };
    case "屯六三":
      return {
        meaning: "放弃前行 若一意孤行 会有灾祸",
        videoUrls: ["https://www.youtube.com/embed/IOpg_Tt47NQ"],
        references: ["https://www.guoyi360.com/64gua03/xj/959.html"],
      };
    case "屯六四":
      return {
        meaning: "乘马的人纷纷而来 有婚配的欲求 会心想事成",
        videoUrls: ["https://www.youtube.com/embed/IOpg_Tt47NQ"],
        references: ["https://www.guoyi360.com/64gua03/xj/960.html"],
      };
    case "屯九五":
      return {
        meaning: "囤积资源 少囤积有利 过度囤积会有灾祸",
        videoUrls: ["https://www.youtube.com/embed/IOpg_Tt47NQ"],
        references: ["https://www.guoyi360.com/64gua03/xj/961.html"],
      };
    case "屯上六":
      return {
        meaning: "乘马的人纷纷而来 悲伤悲痛的情况发生",
        videoUrls: ["https://www.youtube.com/embed/IOpg_Tt47NQ"],
        references: ["https://www.guoyi360.com/64gua03/xj/962.html"],
      };
    case "蒙初六":
      return {
        meaning:
          "愚昧的初期 有利于用刑法惩治坏人 并且给冤屈者脱去枷锁 如果不专心学习去做事 将会带来困境",
        videoUrls: ["https://www.youtube.com/embed/5Z-fmmk9V5c"],
        references: ["https://www.guoyi360.com/64gua04/xj/965.html"],
      }; // @TODO
    case "蒙九二":
      return {
        meaning: "包容愚昧 和 娶妻 吉祥 儿子可以持家了",
        videoUrls: ["https://www.youtube.com/embed/5Z-fmmk9V5c"],
        references: [],
      };
    case "蒙六三":
      return {
        meaning:
          "不适合娶这个女人为妻 因为此女子会遇男色而失身 这种行为不好导致不适合结婚 结果也不会好",
        videoUrls: ["https://www.youtube.com/embed/5Z-fmmk9V5c"],
        references: ["https://www.guoyi360.com/64gua04/xj/967.html"],
      };
    case "蒙六四":
      return {
        meaning: "被蒙昧无知的人所困惑 最终会有灾难",
        videoUrls: ["https://www.youtube.com/embed/5Z-fmmk9V5c"],
        references: ["https://www.guoyi360.com/64gua04/xj/968.html"],
      };
    case "蒙六五":
      return {
        meaning: "愚昧无知的人接受启发 吉兆",
        videoUrls: ["https://www.youtube.com/embed/5Z-fmmk9V5c"],
        references: ["https://www.guoyi360.com/64gua04/xj/969.html"],
      };
    case "蒙上九":
      return {
        meaning: "惊醒愚昧无知的人 不宜行为过当 不利于做贼寇 有利于防御贼寇",
        videoUrls: ["https://www.youtube.com/embed/5Z-fmmk9V5c"],
        references: ["https://www.guoyi360.com/64gua04/xj/970.html"],
      }; // @TODO
    case "需初九":
      return {
        meaning: "在郊野中等待 适宜持之以恒 可避免灾祸",
        videoUrls: ["https://www.youtube.com/embed/9qyoWMG5X7E"],
        references: ["https://www.guoyi360.com/64gua05/xj/973.html"],
      };
    case "需九二":
      return {
        meaning: "身处沙地 虽然早到校人的责难 但最终是吉利的",
        videoUrls: ["https://www.youtube.com/embed/9qyoWMG5X7E"],
        references: ["https://www.guoyi360.com/64gua05/xj/974.html"],
      };
    case "需九三":
      return {
        meaning: "在泥泞中行走 招致贼寇前来",
        videoUrls: ["https://www.youtube.com/embed/9qyoWMG5X7E"],
        references: ["https://www.guoyi360.com/64gua05/xj/975.html"],
      };
    case "需六四":
      return {
        meaning: "身处血泊中 需要尽快逃离险境",
        videoUrls: ["https://www.youtube.com/embed/9qyoWMG5X7E"],
        references: ["https://www.guoyi360.com/64gua05/xj/976.html"],
      };
    case "需九五":
      return {
        meaning: "在享用酒食中等待 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/9qyoWMG5X7E"],
        references: ["https://www.guoyi360.com/64gua05/xj/977.html"],
      };
    case "需上六":
      return {
        meaning: "进入洞穴 虽然会看到不速之客 但尊敬他们 最后获得吉祥",
        videoUrls: ["https://www.youtube.com/embed/9qyoWMG5X7E"],
        references: ["https://www.guoyi360.com/64gua05/xj/978.html"],
      };
    case "讼初六":
      return {
        meaning: "不要长期困于官司 减少口舌是非 最终获得吉祥",
        videoUrls: ["https://www.youtube.com/embed/PyzmelpqTsQ"],
        references: ["https://www.guoyi360.com/64gua06/xj/1020.html"],
      };
    case "讼九二":
      return {
        meaning: "官司失利后 应回家躲避 逃到小国 息事宁人",
        videoUrls: ["https://www.youtube.com/embed/PyzmelpqTsQ"],
        references: ["https://www.guoyi360.com/64gua06/xj/1021.html"],
      };
    case "讼六三":
      return {
        meaning:
          "应该安享旧日俸禄 不要起贪念 若是辅佐君王做事 包括从事公务员工作 即使取得了成就 也不要居功自傲",
        videoUrls: ["https://www.youtube.com/embed/PyzmelpqTsQ"],
        references: ["https://www.guoyi360.com/64gua06/xj/1022.html"],
      };
    case "讼九四":
      return {
        meaning: "不再起诉 安于现状 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/PyzmelpqTsQ"],
        references: ["https://www.guoyi360.com/64gua06/xj/1023.html"],
      };
    case "讼九五":
      return {
        meaning: "官司得到了公正的判决 吉祥",
        videoUrls: ["https://www.youtube.com/embed/PyzmelpqTsQ"],
        references: ["https://www.guoyi360.com/64gua06/xj/1024.html"],
      };
    case "讼上九":
      return {
        meaning: "得到官位 但会多次失去 建议停止诉讼 议和",
        videoUrls: ["https://www.youtube.com/embed/PyzmelpqTsQ"],
        references: ["https://www.guoyi360.com/64gua06/xj/1025.html"],
      }; // @TODO
    case "师初六":
      return {
        meaning: "军纪严明 否则有灾祸",
        videoUrls: ["https://www.youtube.com/embed/XQFom8sDlZo"],
        references: ["https://www.guoyi360.com/64gua07/xj/1028.html"],
      };
    case "师九二":
      return {
        meaning: "率军出征 正固 不偏不倚 可获吉祥 无灾祸 君王会多次嘉奖",
        videoUrls: ["https://www.youtube.com/embed/XQFom8sDlZo"],
        references: ["https://www.guoyi360.com/64gua07/xj/1029.html"],
      };
    case "师六三":
      return {
        meaning: "士兵从战场上运辉尸体 凶险",
        videoUrls: ["https://www.youtube.com/embed/XQFom8sDlZo"],
        references: ["https://www.guoyi360.com/64gua07/xj/1030.html"],
      };
    case "师六四":
      return {
        meaning: "率军及时撤退 可避祸",
        videoUrls: ["https://www.youtube.com/embed/XQFom8sDlZo"],
        references: ["https://www.guoyi360.com/64gua07/xj/1031.html"],
      };
    case "师六五":
      return {
        meaning:
          "田间有动物 象征着有利于发表观点 无灾祸 有德的人可统帅军队 无德的人会战败 即使正固也有凶相",
        videoUrls: ["https://www.youtube.com/embed/XQFom8sDlZo"],
        references: ["https://www.guoyi360.com/64gua07/xj/1032.html"],
      };
    case "师上六":
      return {
        meaning: "天子颁布诏命 论功封爵 需要重用君子远离小人",
        videoUrls: ["https://www.youtube.com/embed/XQFom8sDlZo"],
        references: ["https://www.guoyi360.com/64gua07/xj/1033.html"],
      };
    case "比初六":
      return {
        meaning: "以诚待人 会得到更多的朋友 吉祥",
        videoUrls: ["https://www.youtube.com/embed/GBZas8k7mRs"],
        references: ["https://www.guoyi360.com/64gua08/xj/1068.html"],
      };
    case "比六二":
      return {
        meaning: "加强内部团结 来辅佐君主 吉祥",
        videoUrls: ["https://www.youtube.com/embed/GBZas8k7mRs"],
        references: ["https://www.guoyi360.com/64gua08/xj/1069.html"],
      };
    case "比六三":
      return {
        meaning: "与匪为友 交不到合适的朋友",
        videoUrls: ["https://www.youtube.com/embed/GBZas8k7mRs"],
        references: ["https://www.guoyi360.com/64gua08/xj/1070.html"],
      }; // @TODO
    case "比六四":
      return {
        meaning: "交往中相互信任 加强团结 吉祥",
        videoUrls: ["https://www.youtube.com/embed/GBZas8k7mRs"],
        references: ["https://www.guoyi360.com/64gua08/xj/1071.html"],
      };
    case "比九五":
      return {
        meaning:
          "光明正大交往 君王用三趣之礼狩猎 失去前面的禽兽 老百姓不怕君王 吉祥",
        videoUrls: ["https://www.youtube.com/embed/GBZas8k7mRs"],
        references: ["https://www.guoyi360.com/64gua08/xj/1072.html"],
      }; // @TODO
    case "比上六":
      return {
        meaning: "结交不到首领 凶相",
        videoUrls: ["https://www.youtube.com/embed/GBZas8k7mRs"],
        references: ["https://www.guoyi360.com/64gua08/xj/1073.html"],
      };
    case "小畜初九":
      return {
        meaning: "重复自己的做事风格 无灾且吉祥",
        videoUrls: ["https://www.youtube.com/embed/R5QnvJ_ZTcQ"],
        references: ["https://www.guoyi360.com/64gua09/xj/1076.html"],
      };
    case "小畜九二":
      return {
        meaning: "被牵连而返回本位 吉祥",
        videoUrls: ["https://www.youtube.com/embed/R5QnvJ_ZTcQ"],
        references: ["https://www.guoyi360.com/64gua09/xj/1077.html"],
      };
    case "小畜九三":
      return {
        meaning: "大车脱落了辐条 夫妻反目失和",
        videoUrls: ["https://www.youtube.com/embed/R5QnvJ_ZTcQ"],
        references: ["https://www.guoyi360.com/64gua09/xj/1078.html"],
      };
    case "小畜六四":
      return {
        meaning: "有诚信 不再忧虑 从恐惧中走出来 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/R5QnvJ_ZTcQ"],
        references: ["https://www.guoyi360.com/64gua09/xj/1079.html"],
      };
    case "小畜九五":
      return {
        meaning: "诚信相连 与邻居共享富裕",
        videoUrls: ["https://www.youtube.com/embed/R5QnvJ_ZTcQ"],
        references: ["https://www.guoyi360.com/64gua09/xj/1080.html"],
      };
    case "小畜上九":
      return {
        meaning: "所需雨水已积满 积德载物 日月同辉 出战凶险",
        videoUrls: ["https://www.youtube.com/embed/R5QnvJ_ZTcQ"],
        references: ["https://www.guoyi360.com/64gua09/xj/1081.html"],
      }; // @TODO
    case "履初九":
      return {
        meaning: "衣着朴实无华 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/Kto-2bfj650"],
        references: ["https://www.guoyi360.com/64gua10/xj/1120.html"],
      };
    case "履九二":
      return {
        meaning: "走在平坦的大道上 安然的人占问此卦吉祥",
        videoUrls: ["https://www.youtube.com/embed/Kto-2bfj650"],
        references: ["https://www.guoyi360.com/64gua10/xj/1121.html"],
      };
    case "履六三":
      return {
        meaning:
          "眼睛快要瞎了 但勉强能看到一点点 腿跛了 但勉强能走几步 不小心踩在老虎尾巴上 老虎回头就咬人 凶险 勇敢的武士要竭力为君主效劳",
        videoUrls: ["https://www.youtube.com/embed/Kto-2bfj650"],
        references: ["https://www.guoyi360.com/64gua10/xj/1122.html"],
      };
    case "履九四":
      return {
        meaning: "踩在老虎尾巴上 恐惧最后退去 吉祥",
        videoUrls: ["https://www.youtube.com/embed/Kto-2bfj650"],
        references: ["https://www.guoyi360.com/64gua10/xj/1123.html"],
      };
    case "履九五":
      return {
        meaning: "奋不顾身 冒然前行 占卜此卦者 凶",
        videoUrls: ["https://www.youtube.com/embed/Kto-2bfj650"],
        references: ["https://www.guoyi360.com/64gua10/xj/1124.html"],
      };
    case "履上九":
      return {
        meaning: "不断反思审视自己的所作所为 最终吉祥",
        videoUrls: ["https://www.youtube.com/embed/Kto-2bfj650"],
        references: ["https://www.guoyi360.com/64gua10/xj/1125.html"],
      };
    case "泰初九":
      return {
        meaning: "拔出的茅草离开地面向上是吉利征兆 出征吉祥",
        videoUrls: ["https://www.youtube.com/embed/AUl97v7Kg3Y"],
        references: ["https://www.guoyi360.com/64gua11/xj/1168.html"],
      };
    case "泰九二":
      return {
        meaning:
          "有包容大川似的宽广胸怀 可以徒步涉过大河急流 礼贤下士 对远方的贤德之人也不遗弃 不结成小团体 不结党营私 能够辅佐公正有道德的君主",
        videoUrls: ["https://www.youtube.com/embed/AUl97v7Kg3Y"],
        references: ["https://www.guoyi360.com/64gua11/xj/1169.html"],
      };
    case "泰九三":
      return {
        meaning:
          "处境艰难 正固 没有灾祸 不要怕不能取信于人 在饮食方面有口福之吉",
        videoUrls: ["https://www.youtube.com/embed/AUl97v7Kg3Y"],
        references: ["https://www.guoyi360.com/64gua11/xj/1170.html"],
      };
    case "泰六四":
      return {
        meaning: "像小鸟一样翩翩起舞 因不与邻居共享富有 互相不加戒备 以诚相待",
        videoUrls: ["https://www.youtube.com/embed/AUl97v7Kg3Y"],
        references: ["https://www.guoyi360.com/64gua11/xj/1171.html"],
      }; // @TODO
    case "泰六五":
      return {
        meaning: "帝乙嫁女 因此而获得福泽 最为吉祥",
        videoUrls: ["https://www.youtube.com/embed/AUl97v7Kg3Y"],
        references: ["https://www.guoyi360.com/64gua11/xj/1172.html"],
      };
    case "泰上六":
      return {
        meaning: "城墙倒塌在城壕里 不宜用兵 在城邑中祷告天命 占问必艰难之兆",
        videoUrls: ["https://www.youtube.com/embed/AUl97v7Kg3Y"],
        references: ["https://www.guoyi360.com/64gua11/xj/1173.html"],
      };
    case "否初六":
      return {
        meaning: "拔出的茅草离开地面向上 吉利征兆 有为",
        videoUrls: ["https://www.youtube.com/embed/R5W3ZhXqW5A"],
        references: ["https://www.guoyi360.com/64gua12/xj/2457.html"],
      };
    case "否六二":
      return {
        meaning: "被包容并顺从承受尊者 小人可获吉祥 君子则需要躲避 通达",
        videoUrls: ["https://www.youtube.com/embed/R5W3ZhXqW5A"],
        references: ["https://www.guoyi360.com/64gua12/xj/2458.html"],
      }; // @TODO
    case "否六三":
      return {
        meaning: "被包容而居于下位 最终招致羞辱",
        videoUrls: ["https://www.youtube.com/embed/R5W3ZhXqW5A"],
        references: ["https://www.guoyi360.com/64gua12/xj/2459.html"],
      };
    case "否九四":
      return {
        meaning: "得到君王授命 没有灾祸 众人依附 共享福禄",
        videoUrls: ["https://www.youtube.com/embed/R5W3ZhXqW5A"],
        references: ["https://www.guoyi360.com/64gua12/xj/2460.html"],
      };
    case "否九五":
      return {
        meaning:
          "君子不用躲避 君子可获吉祥 将要灭亡 将要灭亡 白自己拴在大桑树上 就会安然无恙",
        videoUrls: ["https://www.youtube.com/embed/R5W3ZhXqW5A"],
        references: ["https://www.guoyi360.com/64gua12/xj/2461.html"],
      };
    case "否上九":
      return {
        meaning: "苦尽甘来 皆大欢喜",
        videoUrls: ["https://www.youtube.com/embed/R5W3ZhXqW5A"],
        references: ["https://www.guoyi360.com/64gua12/xj/2462.html"],
      };
    case "同人初九":
      return {
        meaning: "走出大门 与人亲近 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/2nuX-Zgrlfk"],
        references: ["https://www.guoyi360.com/64gua13/xj/2489.html"],
      };
    case "同人六二":
      return {
        meaning: "亲近同族的人 必然艰难",
        videoUrls: ["https://www.youtube.com/embed/2nuX-Zgrlfk"],
        references: ["https://www.guoyi360.com/64gua13/xj/2490.html"],
      };
    case "同人九三":
      return {
        meaning: "在草丛中设好伏兵 登高望远 三年不能发动战争",
        videoUrls: ["https://www.youtube.com/embed/2nuX-Zgrlfk"],
        references: ["https://www.guoyi360.com/64gua13/xj/2491.html"],
      };
    case "同人九四":
      return {
        meaning: "占据城头之上 自行退兵而不进攻 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/2nuX-Zgrlfk"],
        references: ["https://www.guoyi360.com/64gua13/xj/2492.html"],
      };
    case "同人九五":
      return {
        meaning: "与人同心同德 先哭后笑 大军会师 庆祝胜利",
        videoUrls: ["https://www.youtube.com/embed/2nuX-Zgrlfk"],
        references: ["https://www.guoyi360.com/64gua13/xj/2493.html"],
      };
    case "同人上九":
      return {
        meaning: "与人在郊外亲善和睦 不会有困厄",
        videoUrls: ["https://www.youtube.com/embed/2nuX-Zgrlfk"],
        references: ["https://www.guoyi360.com/64gua13/xj/2494.html"],
      };
    case "大有初九":
      return {
        meaning:
          "有人交往 不涉及利害 自然不会招致灾祸 须知 需要经历艰辛 才可避免灾祸",
        videoUrls: ["https://www.youtube.com/embed/r4LmwhY5RQY"],
        references: ["https://www.guoyi360.com/64gua14/xj/2506.html"],
      };
    case "大有九二":
      return {
        meaning: "用大车载物 无论去哪里 都不会有灾祸",
        videoUrls: ["https://www.youtube.com/embed/r4LmwhY5RQY"],
        references: ["https://www.guoyi360.com/64gua14/xj/2507.html"],
      };
    case "大有九三":
      return {
        meaning: "公候按时向天子进贡 小人做不到这一点",
        videoUrls: ["https://www.youtube.com/embed/r4LmwhY5RQY"],
        references: ["https://www.guoyi360.com/64gua14/xj/2508.html"],
      }; // @TODO
    case "大有九四":
      return {
        meaning: "不骄不躁 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/r4LmwhY5RQY"],
        references: ["https://www.guoyi360.com/64gua14/xj/2509.html"],
      };
    case "大有六五":
      return {
        meaning: "胸怀坦荡 上下以诚相待 威严自显 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/r4LmwhY5RQY"],
        references: ["https://www.guoyi360.com/64gua14/xj/2510.html"],
      };
    case "大有上九":
      return {
        meaning: "会得到上天的帮助 吉祥而无不利",
        videoUrls: ["https://www.youtube.com/embed/r4LmwhY5RQY"],
        references: ["https://www.guoyi360.com/64gua14/xj/2511.html"],
      };
    case "谦初六":
      return {
        meaning: "谦虚而富有美德的君子 梵语大江大河 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/ehKEoYdCqnY"],
        references: [""],
      };
    case "谦六二":
      return {
        meaning: "谦虚之名传扬外界 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/ehKEoYdCqnY"],
        references: [""],
      };
    case "谦九三":
      return {
        meaning: "有功而谦虚 君子保持谦逊 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/ehKEoYdCqnY"],
        references: [""],
      };
    case "谦六四":
      return {
        meaning: "发扬谦逊美德 行事无往不利",
        videoUrls: ["https://www.youtube.com/embed/ehKEoYdCqnY"],
        references: [""],
      };
    case "谦六五":
      return {
        meaning: "与邻国同遭侵略 则需共同应战 如此无往不利",
        videoUrls: ["https://www.youtube.com/embed/ehKEoYdCqnY"],
        references: [""],
      };
    case "谦上六":
      return {
        meaning: "谦虚之名传扬外界 利于兴兵征伐 占领新的领地",
        videoUrls: ["https://www.youtube.com/embed/ehKEoYdCqnY"],
        references: [""],
      };
    case "豫初六":
      return {
        meaning: "因喜悦而闻名 有凶险",
        videoUrls: ["https://www.youtube.com/embed/hEwqpStCXpA"],
        references: ["https://www.guoyi360.com/64gua16/xj/2566.html"],
      }; // @TODO
    case "豫六二":
      return {
        meaning: "德行坚贞胜过磐石 不浪费生命 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/hEwqpStCXpA"],
        references: ["https://www.guoyi360.com/64gua16/xj/2567.html"],
      }; // @TODO
    case "豫六三":
      return {
        meaning: "小人媚上以逸乐惑主 会有忧悔 悔恨太迟会更后悔",
        videoUrls: ["https://www.youtube.com/embed/hEwqpStCXpA"],
        references: ["https://www.guoyi360.com/64gua16/xj/2568.html"],
      }; // @TODO
    case "豫九四":
      return {
        meaning:
          "喜乐自来 会有大的收获 不比猜疑 像簪子聚拢头发一样将朋友们聚集在一起",
        videoUrls: ["https://www.youtube.com/embed/hEwqpStCXpA"],
        references: ["https://www.guoyi360.com/64gua16/xj/2569.html"],
      };
    case "豫六五":
      return {
        meaning: "占问疫病吉凶 得此卦者 会病期长 但不会死亡",
        videoUrls: ["https://www.youtube.com/embed/hEwqpStCXpA"],
        references: ["https://www.guoyi360.com/64gua16/xj/2570.html"],
      };
    case "豫上六":
      return {
        meaning:
          "已处在天昏地暗的局面 去沉溺于寻欢作乐 十分危险， 若改弦更张 可避免灾祸",
        videoUrls: ["https://www.youtube.com/embed/hEwqpStCXpA"],
        references: ["https://www.guoyi360.com/64gua16/xj/2571.html"],
      };
    case "随初九":
      return {
        meaning: "官位有变动 利于正固 吉祥 出门交友不会有过失",
        videoUrls: ["https://www.youtube.com/embed/scD68gSpPvQ"],
        references: ["https://www.guoyi360.com/64gua17/xj/2650.html"],
      }; // @TODO
    case "随六二":
      return {
        meaning: "依附小人会失去德高望重的人",
        videoUrls: ["https://www.youtube.com/embed/scD68gSpPvQ"],
        references: ["https://www.guoyi360.com/64gua17/xj/2651.html"],
      };
    case "随六三":
      return {
        meaning: "依附德高望重的人会失去小人 跟随有追求的人会有所得 利于正固",
        videoUrls: ["https://www.youtube.com/embed/scD68gSpPvQ"],
        references: ["https://www.guoyi360.com/64gua17/xj/2652.html"],
      };
    case "随九四":
      return {
        meaning:
          "跟随别人去获得利益 即便守正道 也是凶 有诚信的做事 光明磊落 怎么会有错",
        videoUrls: ["https://www.youtube.com/embed/scD68gSpPvQ"],
        references: ["https://www.guoyi360.com/64gua17/xj/2653.html"],
      };
    case "随九五":
      return {
        meaning: "真诚的随从嘉言善行 吉祥",
        videoUrls: ["https://www.youtube.com/embed/scD68gSpPvQ"],
        references: ["https://www.guoyi360.com/64gua17/xj/2654.html"],
      };
    case "随上六":
      return {
        meaning: "先拘押起来 后又捆绑起来 成为君王祭祀在西山的牺牲品",
        videoUrls: ["https://www.youtube.com/embed/scD68gSpPvQ"],
        references: ["https://www.guoyi360.com/64gua17/xj/2655.html"],
      }; // @TODO
    case "蛊初六":
      return {
        meaning:
          "改正父亲的过失 有了这样的儿子 父辈以及父辈以上可避免灾祸 即使开始会有危险 最后可获得吉祥",
        videoUrls: ["https://www.youtube.com/embed/hmqa9BywpfM"],
        references: ["https://www.guoyi360.com/64gua18/xj/2697.html"],
      };
    case "蛊九二":
      return {
        meaning: "改正母亲的过失 不能固守专断",
        videoUrls: ["https://www.youtube.com/embed/hmqa9BywpfM"],
        references: ["https://www.guoyi360.com/64gua18/xj/2698.html"],
      }; // @TODO
    case "蛊九三":
      return {
        meaning: "改正父亲的过失 即便遭遇小困难 但无大灾",
        videoUrls: ["https://www.youtube.com/embed/hmqa9BywpfM"],
        references: ["https://www.guoyi360.com/64gua18/xj/2699.html"],
      };
    case "蛊六四":
      return {
        meaning: "姑息纵容父亲的过错 往往出现艰难",
        videoUrls: ["https://www.youtube.com/embed/hmqa9BywpfM"],
        references: ["https://www.guoyi360.com/64gua18/xj/2700.html"],
      };
    case "蛊六五":
      return {
        meaning: "改正父亲的过失 会得到赞誉",
        videoUrls: ["https://www.youtube.com/embed/hmqa9BywpfM"],
        references: ["https://www.guoyi360.com/64gua18/xj/2701.html"],
      };
    case "蛊上九":
      return {
        meaning: "不侍奉王侯 专心自己的领域是高尚的",
        videoUrls: ["https://www.youtube.com/embed/hmqa9BywpfM"],
        references: ["https://www.guoyi360.com/64gua18/xj/2702.html"],
      }; // @TODO
    case "临初九":
      return {
        meaning: "心怀感化之心降临到民众 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/XBgf37CIkk0"],
        references: ["https://www.guoyi360.com/64gua19/xj/2753.html"],
      };
    case "临九二":
      return {
        meaning: "心怀感化之心降临到民众 吉祥 无所不利",
        videoUrls: ["https://www.youtube.com/embed/XBgf37CIkk0"],
        references: ["https://www.guoyi360.com/64gua19/xj/2754.html"],
      };
    case "临六三":
      return {
        meaning: "居高临下 靠甜言蜜语督导 无利 已然知晓自己的过失 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/XBgf37CIkk0"],
        references: ["https://www.guoyi360.com/64gua19/xj/2755.html"],
      }; // @TODO
    case "临六四":
      return {
        meaning: "亲子体察民情 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/XBgf37CIkk0"],
        references: ["https://www.guoyi360.com/64gua19/xj/2756.html"],
      };
    case "临六五":
      return {
        meaning: "以聪明才智实行督导 可以视为王道 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/XBgf37CIkk0"],
        references: ["https://www.guoyi360.com/64gua19/xj/2757.html"],
      };
    case "临上六":
      return {
        meaning: "敦厚宽仁 体察民情 可获吉祥 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/XBgf37CIkk0"],
        references: ["https://www.guoyi360.com/64gua19/xj/2758.html"],
      };
    case "观初六":
      return {
        meaning: "以孩童的视角观察事物 小人没有灾祸 君子会有灾祸",
        videoUrls: ["https://www.youtube.com/embed/Z_b6ZuOwjbQ"],
        references: ["https://www.guoyi360.com/64gua20/xj/2841.html"],
      };
    case "观六二":
      return {
        meaning: "暗中窥探观察 适宜女子正固",
        videoUrls: ["https://www.youtube.com/embed/Z_b6ZuOwjbQ"],
        references: ["https://www.guoyi360.com/64gua20/xj/2842.html"],
      };
    case "观六三":
      return {
        meaning: "观察别人对自己的反应 查醒自己的言行 审时度势 小心谨慎的进退",
        videoUrls: ["https://www.youtube.com/embed/Z_b6ZuOwjbQ"],
        references: ["https://www.guoyi360.com/64gua20/xj/2843.html"],
      }; // @TODO
    case "观六四":
      return {
        meaning: "观察一个国家的风土人情 适宜用宾客之力朝见君王",
        videoUrls: ["https://www.youtube.com/embed/Z_b6ZuOwjbQ"],
        references: ["https://www.guoyi360.com/64gua20/xj/2844.html"],
      };
    case "观九五":
      return {
        meaning: "观察同国的民情 君子无灾祸",
        videoUrls: ["https://www.youtube.com/embed/Z_b6ZuOwjbQ"],
        references: ["https://www.guoyi360.com/64gua20/xj/2845.html"],
      }; // @TODO
    case "观上九":
      return {
        meaning: "观察外国的民情 君子无灾祸",
        videoUrls: ["https://www.youtube.com/embed/Z_b6ZuOwjbQ"],
        references: ["https://www.guoyi360.com/64gua20/xj/2846.html"],
      };
    case "噬嗑初九":
      return {
        meaning: "脚上带上木枷 损伤了脚趾 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/nVtcCwAT8-g"],
        references: ["https://www.guoyi360.com/64gua21/xj/2910.html"],
      };
    case "噬嗑六二":
      return {
        meaning: "咬食肥肉 使鼻子陷入肉中 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/nVtcCwAT8-g"],
        references: ["https://www.guoyi360.com/64gua21/xj/2911.html"],
      };
    case "噬嗑六三":
      return {
        meaning: "咬腊肉干 中了毒 小有不顺 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/nVtcCwAT8-g"],
        references: ["https://www.guoyi360.com/64gua21/xj/2912.html"],
      };
    case "噬嗑九四":
      return {
        meaning:
          "施用刑罚惩戒犯人 像咬带骨的肉一样困难 具有铜箭一样的刚正之气 有利于在艰难的时候正固 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/nVtcCwAT8-g"],
        references: ["https://www.guoyi360.com/64gua21/xj/2913.html"],
      }; // @TODO
    case "噬嗑六五":
      return {
        meaning: "吃风干的肉 得到黄金 正固思危 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/nVtcCwAT8-g"],
        references: ["https://www.guoyi360.com/64gua21/xj/2914.html"],
      };
    case "噬嗑上九":
      return {
        meaning: "肩带木枷遮住耳朵 有凶险",
        videoUrls: ["https://www.youtube.com/embed/nVtcCwAT8-g"],
        references: ["https://www.guoyi360.com/64gua21/xj/2915.html"],
      };
    case "贲初九":
      return {
        meaning: "修饰脚趾弃车步行而走",
        videoUrls: ["https://www.youtube.com/embed/YDdFOCjnAWE"],
        references: ["https://www.guoyi360.com/64gua22/xj/3190.html"],
      };
    case "贲六二":
      return {
        meaning: "修饰胡须 为了与上司一起",
        videoUrls: ["https://www.youtube.com/embed/YDdFOCjnAWE"],
        references: ["https://www.guoyi360.com/64gua22/xj/3191.html"],
      }; // @TODO
    case "贲九三":
      return {
        meaning: "修饰过后再加以润色 长期正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/YDdFOCjnAWE"],
        references: ["https://www.guoyi360.com/64gua22/xj/3192.html"],
      };
    case "贲六四":
      return {
        meaning:
          "修饰得如此雅致 骑的白马有如此纯洁无暇 不是盗寇 是来求婚的佳人",
        videoUrls: ["https://www.youtube.com/embed/YDdFOCjnAWE"],
        references: ["https://www.guoyi360.com/64gua22/xj/3193.html"],
      };
    case "贲六五":
      return {
        meaning: "修饰山丘园林 用了大量的布帛 艰难 但最终会获得吉祥",
        videoUrls: ["https://www.youtube.com/embed/YDdFOCjnAWE"],
        references: ["https://www.guoyi360.com/64gua22/xj/3194.html"],
      };
    case "贲上九":
      return {
        meaning: "以白色为装饰 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/YDdFOCjnAWE"],
        references: ["https://www.guoyi360.com/64gua22/xj/3195.html"],
      };
    case "剥初六":
      return {
        meaning: "剥落床体从床脚开始 致使床腿损坏 有凶险",
        videoUrls: ["https://www.youtube.com/embed/yUu8eRR_vbw"],
        references: ["https://www.guoyi360.com/64gua23/xj/3545.html"],
      };
    case "剥六二":
      return {
        meaning: "剥落床体从床头开始 致使床头损坏 有凶险",
        videoUrls: ["https://www.youtube.com/embed/yUu8eRR_vbw"],
        references: ["https://www.guoyi360.com/64gua23/xj/3546.html"],
      };
    case "剥六三":
      return {
        meaning: "剥落 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/yUu8eRR_vbw"],
        references: ["https://www.guoyi360.com/64gua23/xj/3547.html"],
      };
    case "剥六四":
      return {
        meaning: "剥蚀到床板 有凶险",
        videoUrls: ["https://www.youtube.com/embed/yUu8eRR_vbw"],
        references: ["https://www.guoyi360.com/64gua23/xj/3548.html"],
      };
    case "剥六五":
      return {
        meaning: "像鱼鲜排成一行一样 以宫人的身份受到宠幸 无往不利",
        videoUrls: ["https://www.youtube.com/embed/yUu8eRR_vbw"],
        references: ["https://www.guoyi360.com/64gua23/xj/3549.html"],
      };
    case "剥上九":
      return {
        meaning: "不吃硕大的果子 君子得到民众的拥戴 小人遭到覆巢之灾",
        videoUrls: ["https://www.youtube.com/embed/yUu8eRR_vbw"],
        references: ["https://www.guoyi360.com/64gua23/xj/3550.html"],
      };
    case "复初九":
      return {
        meaning: "行而未远就适时而返 没有造成很大的悔意 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/AT_tZwbRG3I"],
        references: ["https://www.guoyi360.com/64gua24/xj/3907.html"],
      };
    case "复六二":
      return {
        meaning: "停止返回 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/AT_tZwbRG3I"],
        references: ["https://www.guoyi360.com/64gua24/xj/3908.html"],
      };
    case "复六三":
      return {
        meaning: "频繁的返回 艰难 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/AT_tZwbRG3I"],
        references: ["https://www.guoyi360.com/64gua24/xj/3909.html"],
      };
    case "复六四":
      return {
        meaning: "在行列中能独自返回",
        videoUrls: ["https://www.youtube.com/embed/AT_tZwbRG3I"],
        references: ["https://www.guoyi360.com/64gua24/xj/3910.html"],
      }; // @TODO
    case "复六五":
      return {
        meaning: "敦厚笃诚的返回 没有悔恨",
        videoUrls: ["https://www.youtube.com/embed/AT_tZwbRG3I"],
        references: ["https://www.guoyi360.com/64gua24/xj/3911.html"],
      };
    case "复上六":
      return {
        meaning:
          "迷失在返回的途中 有凶险 会有灾难 出兵打仗 最终惨败凶险来自于国君 十年不可以出战",
        videoUrls: ["https://www.youtube.com/embed/AT_tZwbRG3I"],
        references: ["https://www.guoyi360.com/64gua24/xj/3912.html"],
      }; // @TODO
    case "无妄初九":
      return {
        meaning: "不妄为 按照自己的心志 所行 吉祥",
        videoUrls: ["https://www.youtube.com/embed/x1hz0zTk_0g"],
        references: ["https://www.guoyi360.com/64gua25/xj/5188.html"],
      };
    case "无妄六二":
      return {
        meaning: "不耕耘却有收获 不开荒却有良田 则有利于有所作为",
        videoUrls: ["https://www.youtube.com/embed/x1hz0zTk_0g"],
        references: ["https://www.guoyi360.com/64gua25/xj/5189.html"],
      };
    case "无妄六三":
      return {
        meaning: "意想不到的灾祸到来 路人牵走被绳子拴住的耕牛 城里人有灾祸",
        videoUrls: ["https://www.youtube.com/embed/x1hz0zTk_0g"],
        references: ["https://www.guoyi360.com/64gua25/xj/5190.html"],
      };
    case "无妄九四":
      return {
        meaning: "可以正固 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/x1hz0zTk_0g"],
        references: ["https://www.guoyi360.com/64gua25/xj/5191.html"],
      };
    case "无妄九五":
      return {
        meaning: "得了意想不到的疾病 不比用药治疗 自会痊愈",
        videoUrls: ["https://www.youtube.com/embed/x1hz0zTk_0g"],
        references: ["https://www.guoyi360.com/64gua25/xj/5192.html"],
      };
    case "无妄上九":
      return {
        meaning: "切勿妄为 将有灾祸 无益处",
        videoUrls: ["https://www.youtube.com/embed/x1hz0zTk_0g"],
        references: ["https://www.guoyi360.com/64gua25/xj/5193.html"],
      };
    case "大畜初九":
      return {
        meaning: "有危险 适宜停止",
        videoUrls: ["https://www.youtube.com/embed/Td5fwwQ7120"],
        references: ["https://www.guoyi360.com/64gua26/xj/5314.html"],
      };
    case "大畜九二":
      return {
        meaning: "车身与车轴相分离",
        videoUrls: ["https://www.youtube.com/embed/Td5fwwQ7120"],
        references: ["https://www.guoyi360.com/64gua26/xj/5315.html"],
      };
    case "大畜九三":
      return {
        meaning: "骏马互相追逐 有利于艰难中正固 每日演练战车防卫 适宜有所作为",
        videoUrls: ["https://www.youtube.com/embed/Td5fwwQ7120"],
        references: ["https://www.guoyi360.com/64gua26/xj/5316.html"],
      };
    case "大畜六四":
      return {
        meaning: "在牛的角上拴上一根木头 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/Td5fwwQ7120"],
        references: ["https://www.guoyi360.com/64gua26/xj/5317.html"],
      };
    case "大畜六五":
      return {
        meaning: "是烈性的猪长出牙齿 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/Td5fwwQ7120"],
        references: ["https://www.guoyi360.com/64gua26/xj/5319.html"],
      }; // @TODO
    case "大畜上九":
      return {
        meaning: "四通八达的道路 亨通顺畅",
        videoUrls: ["https://www.youtube.com/embed/Td5fwwQ7120"],
        references: ["https://www.guoyi360.com/64gua26/xj/5320.html"],
      };
    case "颐初九":
      return {
        meaning: "扔下属于你的灵龟 看我吃东西 有凶险",
        videoUrls: ["https://www.youtube.com/embed/ETMTxDJiFR4"],
        references: ["https://www.guoyi360.com/64gua27/xj/5323.html"],
      }; // @TODO
    case "颐六二":
      return {
        meaning: "颠倒颐精养气之道 像高处寻求颐养 兴兵作战会有风险",
        videoUrls: ["https://www.youtube.com/embed/ETMTxDJiFR4"],
        references: ["https://www.guoyi360.com/64gua27/xj/5324.html"],
      }; // @TODO
    case "颐六三":
      return {
        meaning: "违反颐精养气之道 即使正固也有凶险 十年内不能施展才能 无益处",
        videoUrls: ["https://www.youtube.com/embed/ETMTxDJiFR4"],
        references: ["https://www.guoyi360.com/64gua27/xj/5325.html"],
      };
    case "颐六四":
      return {
        meaning:
          "颠倒颐精养气之道 可获吉祥 像老虎一样凝视 急欲不断的追逐 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/ETMTxDJiFR4"],
        references: ["https://www.guoyi360.com/64gua27/xj/5326.html"],
      }; // @TODO
    case "颐六五":
      return {
        meaning: "违反规律 在家正固 可获吉祥 不可以跨越大江大河",
        videoUrls: ["https://www.youtube.com/embed/ETMTxDJiFR4"],
        references: ["https://www.guoyi360.com/64gua27/xj/5327.html"],
      };
    case "颐上九":
      return {
        meaning: "鲸油颐精养气之道 虽然艰难 可获吉祥 利于渡过大江大河",
        videoUrls: ["https://www.youtube.com/embed/ETMTxDJiFR4"],
        references: ["https://www.guoyi360.com/64gua27/xj/5328.html"],
      }; // @TODO
    case "大过初六":
      return {
        meaning: "用洁净的茅草铺地以陈设祭品 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/ENDIi0PFR90"],
        references: ["https://www.guoyi360.com/64gua28/xj/5331.html"],
      };
    case "大过九二":
      return {
        meaning: "枯树发芽 老翁娶新妻 无所不利",
        videoUrls: ["https://www.youtube.com/embed/ENDIi0PFR90"],
        references: ["https://www.guoyi360.com/64gua28/xj/5332.html"],
      };
    case "大过九三":
      return {
        meaning: "房梁弯曲 有凶险",
        videoUrls: ["https://www.youtube.com/embed/ENDIi0PFR90"],
        references: ["https://www.guoyi360.com/64gua28/xj/5333.html"],
      };
    case "大过九四":
      return {
        meaning: "房梁隆起 可获吉祥 如果有意外发生 则行事艰难",
        videoUrls: ["https://www.youtube.com/embed/ENDIi0PFR90"],
        references: ["https://www.guoyi360.com/64gua28/xj/5334.html"],
      };
    case "大过九五":
      return {
        meaning: "枯树开花 老妇与少男结合 无灾祸 无赞誉",
        videoUrls: ["https://www.youtube.com/embed/ENDIi0PFR90"],
        references: ["https://www.guoyi360.com/64gua28/xj/5335.html"],
      };
    case "大过上六":
      return {
        meaning: "徒步过河 被水淹灭了 头顶 有凶险 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/ENDIi0PFR90"],
        references: ["https://www.guoyi360.com/64gua28/xj/5336.html"],
      };
    case "坎初六":
      return {
        meaning: "在重重险阻之中 掉入陷阱 有凶险",
        videoUrls: ["https://www.youtube.com/embed/NocLlveOsS0"],
        references: ["https://www.guoyi360.com/64gua29/xj/5339.html"],
      };
    case "坎九二":
      return {
        meaning: "在陷阱中经历危险 谋求小事 会有获得",
        videoUrls: ["https://www.youtube.com/embed/NocLlveOsS0"],
        references: ["https://www.guoyi360.com/64gua29/xj/5340.html"],
      };
    case "坎六三":
      return {
        meaning:
          "来来回回都处于险难之中 陷穴既险也深 一旦落入陷阱之中 暂时无法施展才能",
        videoUrls: ["https://www.youtube.com/embed/NocLlveOsS0"],
        references: ["https://www.guoyi360.com/64gua29/xj/5341.html"],
      };
    case "坎六四":
      return {
        meaning: "将一杯薄酒 两筐淡食 用瓦罐装起来 用窗口收到信约 最后无灾祸",
        videoUrls: ["https://www.youtube.com/embed/NocLlveOsS0"],
        references: ["https://www.guoyi360.com/64gua29/xj/5342.html"],
      }; // @TODO
    case "坎九五":
      return {
        meaning: "陷穴尚未满溢 到需要稳定时则艰难自平 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/NocLlveOsS0"],
        references: ["https://www.guoyi360.com/64gua29/xj/5343.html"],
      }; // @TODO
    case "坎上六":
      return {
        meaning: "用绳索将犯人捆绑起来放入荆棘草丛之中 三年不让解脱 比有凶险",
        videoUrls: ["https://www.youtube.com/embed/NocLlveOsS0"],
        references: ["https://www.guoyi360.com/64gua29/xj/5344.html"],
      };
    case "离初九":
      return {
        meaning: "步子错乱 但保持谨慎恭敬 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/oKcxqSrz9r8"],
        references: ["https://www.guoyi360.com/64gua30/xj/6058.html"],
      };
    case "离六二":
      return {
        meaning: "有黄色附于物 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/oKcxqSrz9r8"],
        references: ["https://www.guoyi360.com/64gua30/xj/6059.html"],
      };
    case "离九三":
      return {
        meaning:
          "太阳快要落山 如果不能边打击瓦罐边唱歌 就会发出垂老之人的哀叹 有凶险",
        videoUrls: ["https://www.youtube.com/embed/oKcxqSrz9r8"],
        references: ["https://www.guoyi360.com/64gua30/xj/6060.html"],
      };
    case "离九四":
      return {
        meaning: "突如其来 如同火焰熊熊燃烧 会有生命危险 会被抛弃",
        videoUrls: ["https://www.youtube.com/embed/oKcxqSrz9r8"],
        references: ["https://www.guoyi360.com/64gua30/xj/6061.html"],
      }; // @TODO
    case "离六五":
      return {
        meaning: "眼泪涌出的样子 悲戚哀叹的样子 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/oKcxqSrz9r8"],
        references: ["https://www.guoyi360.com/64gua30/xj/6062.html"],
      }; // @TODO
    case "离上九":
      return {
        meaning:
          "君王用贤人出兵征伐 对能够斩杀敌方首领的人给予嘉奖 不复活一般的随从 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/oKcxqSrz9r8"],
        references: ["https://www.guoyi360.com/64gua30/xj/6063.html"],
      }; // @TODO
    case "咸初六":
      return {
        meaning: "感应发生在脚上的大拇指 因势而动",
        videoUrls: ["https://www.youtube.com/embed/EHvKYtz_2UI"],
        references: ["https://www.guoyi360.com/64gua31/xj/5347.html"],
      };
    case "咸六二":
      return {
        meaning: "感应发生在小腿肚 有凶险 在家里不出来 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/EHvKYtz_2UI"],
        references: ["https://www.guoyi360.com/64gua31/xj/5348.html"],
      };
    case "咸九三":
      return {
        meaning: "感应发生在大腿 执迷于盲目追随别人 步履维艰",
        videoUrls: ["https://www.youtube.com/embed/EHvKYtz_2UI"],
        references: ["https://www.guoyi360.com/64gua31/xj/5349.html"],
      };
    case "咸九四":
      return {
        meaning:
          "可获吉祥 危难窘境会消失 即使心意不安 思绪不绝 朋友最后会顺从你的意愿",
        videoUrls: ["https://www.youtube.com/embed/EHvKYtz_2UI"],
        references: ["https://www.guoyi360.com/64gua31/xj/5350.html"],
      };
    case "咸九五":
      return {
        meaning: "感应发生在脊背上 不会有后悔",
        videoUrls: ["https://www.youtube.com/embed/EHvKYtz_2UI"],
        references: ["https://www.guoyi360.com/64gua31/xj/5351.html"],
      };
    case "咸上六":
      return {
        meaning: "感应发生在 口舌 牙床 面颊 都会因势而动",
        videoUrls: ["https://www.youtube.com/embed/EHvKYtz_2UI"],
        references: ["https://www.guoyi360.com/64gua31/xj/5352.html"],
      };
    case "恒初六":
      return {
        meaning: "有所追求 持续追求过于长 即使正固也有凶险 无益处",
        videoUrls: ["https://www.youtube.com/embed/bxbSfyoW9Hg"],
        references: ["https://www.guoyi360.com/64gua32/xj/5367.html"],
      };
    case "恒九二":
      return {
        meaning: "窘境会消失",
        videoUrls: ["https://www.youtube.com/embed/bxbSfyoW9Hg"],
        references: ["https://www.guoyi360.com/64gua32/xj/5368.html"],
      };
    case "恒九三":
      return {
        meaning: "不能长期保持美德 有时会蒙受羞辱 行事艰难",
        videoUrls: ["https://www.youtube.com/embed/bxbSfyoW9Hg"],
        references: ["https://www.guoyi360.com/64gua32/xj/5369.html"],
      };
    case "恒九四":
      return {
        meaning: "田间没有禽兽",
        videoUrls: ["https://www.youtube.com/embed/bxbSfyoW9Hg"],
        references: ["https://www.guoyi360.com/64gua32/xj/5370.html"],
      };
    case "恒六五":
      return {
        meaning: "长久的保持美德正固 女人可获得吉祥 男人会处境凶险",
        videoUrls: ["https://www.youtube.com/embed/bxbSfyoW9Hg"],
        references: ["https://www.guoyi360.com/64gua32/xj/5371.html"],
      };
    case "恒上六":
      return {
        meaning: "震动不安 不能持之以恒 有凶险",
        videoUrls: ["https://www.youtube.com/embed/bxbSfyoW9Hg"],
        references: ["https://www.guoyi360.com/64gua32/xj/5372.html"],
      };
    case "遁初六":
      return {
        meaning: "退避不及 落在后面 有凶险 暂时不宜作为 施展才能",
        videoUrls: ["https://www.youtube.com/embed/C6_vDUGYBkI"],
        references: ["https://www.guoyi360.com/64gua33/xj/5412.html"],
      };
    case "遁六二":
      return {
        meaning: "被黄牛皮绳捆绑 没有人能够逃脱",
        videoUrls: ["https://www.youtube.com/embed/C6_vDUGYBkI"],
        references: ["https://www.guoyi360.com/64gua33/xj/5413.html"],
      };
    case "遁九三":
      return {
        meaning: "由于被牵累而难以逃脱 会生病 有危险 畜养奴仆和侍妾 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/C6_vDUGYBkI"],
        references: ["https://www.guoyi360.com/64gua33/xj/5414.html"],
      };
    case "遁九四":
      return {
        meaning: "行事有利于逃跑时 君子可获吉祥 小人则难以挣脱",
        videoUrls: ["https://www.youtube.com/embed/C6_vDUGYBkI"],
        references: ["https://www.guoyi360.com/64gua33/xj/5415.html"],
      };
    case "遁九五":
      return {
        meaning: "选择最佳时机退出 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/C6_vDUGYBkI"],
        references: ["https://www.guoyi360.com/64gua33/xj/5416.html"],
      };
    case "遁上九":
      return {
        meaning: "远走高飞 完全退避 无所不利",
        videoUrls: ["https://www.youtube.com/embed/C6_vDUGYBkI"],
        references: ["https://www.guoyi360.com/64gua33/xj/5417.html"],
      };
    case "大壮初九":
      return {
        meaning: "脚趾变粗壮 出兵征伐 有凶险 需要诚信",
        videoUrls: ["https://www.youtube.com/embed/McNgvOh7zv0"],
        references: ["https://www.guoyi360.com/64gua34/xj/5420.html"],
      }; // @TODO
    case "大壮九二":
      return {
        meaning: "正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/McNgvOh7zv0"],
        references: ["https://www.guoyi360.com/64gua34/xj/5421.html"],
      };
    case "大壮九三":
      return {
        meaning: "小人靠力量 君子不这样 正固有危险 公山羊用角顶篱笆 角被缠住",
        videoUrls: ["https://www.youtube.com/embed/McNgvOh7zv0"],
        references: ["https://www.guoyi360.com/64gua34/xj/5422.html"],
      }; // @TODO
    case "大壮九四":
      return {
        meaning:
          "正固吉祥 忧悔消除 藩篱被冲破 羊角被解脱出来 像大车的车轮一样结实",
        videoUrls: ["https://www.youtube.com/embed/McNgvOh7zv0"],
        references: ["https://www.guoyi360.com/64gua34/xj/5423.html"],
      }; // @TODO
    case "大壮六五":
      return {
        meaning: "在田边丢失山羊 不会有忧悔",
        videoUrls: ["https://www.youtube.com/embed/McNgvOh7zv0"],
        references: ["https://www.guoyi360.com/64gua34/xj/5424.html"],
      };
    case "大壮上六":
      return {
        meaning: "公山羊用角顶篱笆 不能退后 不能前进 无益处 艰难过后可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/McNgvOh7zv0"],
        references: ["https://www.guoyi360.com/64gua34/xj/5425.html"],
      };
    case "晋初六":
      return {
        meaning: "晋升中遭遇挫折阻碍 正固吉祥 暂时没有收到信任 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/swOm6zw8WeA"],
        references: ["https://www.guoyi360.com/64gua35/xj/5433.html"],
      };
    case "晋六二":
      return {
        meaning: "晋升中遭遇忧愁 正固吉祥 将会从祖母那里受到宏大的恩泽",
        videoUrls: ["https://www.youtube.com/embed/swOm6zw8WeA"],
        references: ["https://www.guoyi360.com/64gua35/xj/5434.html"],
      };
    case "晋六三":
      return {
        meaning: "获得众人的信任 忧悔消除",
        videoUrls: ["https://www.youtube.com/embed/swOm6zw8WeA"],
        references: ["https://www.guoyi360.com/64gua35/xj/5435.html"],
      };
    case "晋九四":
      return {
        meaning: "今生如同 老鼠一样 即贪婪有没有一技之长 正固有危险",
        videoUrls: ["https://www.youtube.com/embed/swOm6zw8WeA"],
        references: ["https://www.guoyi360.com/64gua35/xj/5436.html"],
      };
    case "晋六五":
      return {
        meaning: "忧悔消除 无需再为得失而忧虑 有所作为可获吉祥 无所不利",
        videoUrls: ["https://www.youtube.com/embed/swOm6zw8WeA"],
        references: ["https://www.guoyi360.com/64gua35/xj/5437.html"],
      };
    case "晋上九":
      return {
        meaning: "晋升到了顶点 用征讨小国而建立功勋 危中有吉 无灾祸 正固有难",
        videoUrls: ["https://www.youtube.com/embed/swOm6zw8WeA"],
        references: ["https://www.guoyi360.com/64gua35/xj/5438.html"],
      };
    case "明夷初九":
      return {
        meaning:
          "光明遭到损伤时 就像飞鸟低垂着翅膀 惊慌飞行 如同君子急行 三天没有吃饭 一旦有所作为 会受到主人的责备",
        videoUrls: ["https://www.youtube.com/embed/_H3ysGIPp8M"],
        references: ["https://www.guoyi360.com/64gua36/xj/5441.html"],
      }; // @TODO
    case "明夷六二":
      return {
        meaning: "光明遭到损伤时 伤到左大腿 如果有良马来救 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/_H3ysGIPp8M"],
        references: ["https://www.guoyi360.com/64gua36/xj/5442.html"],
      };
    case "明夷九三":
      return {
        meaning: "光明遭到损伤时 在南方狩猎 获得丰厚 不可操之过急 正固",
        videoUrls: ["https://www.youtube.com/embed/_H3ysGIPp8M"],
        references: ["https://www.guoyi360.com/64gua36/xj/5443.html"],
      }; // @TODO
    case "明夷六四":
      return {
        meaning: "进入近臣内侧 洞悉光明损伤的内情 走出院子",
        videoUrls: ["https://www.youtube.com/embed/_H3ysGIPp8M"],
        references: ["https://www.guoyi360.com/64gua36/xj/5444.html"],
      }; // @TODO
    case "明夷六五":
      return {
        meaning: "像箕子受难时一样 正固",
        videoUrls: ["https://www.youtube.com/embed/_H3ysGIPp8M"],
        references: ["https://www.guoyi360.com/64gua36/xj/5445.html"],
      };
    case "明夷上六":
      return {
        meaning: "不光明 晦暗 起初像天空中升起 最后又落到地上",
        videoUrls: ["https://www.youtube.com/embed/_H3ysGIPp8M"],
        references: ["https://www.guoyi360.com/64gua36/xj/5446.html"],
      };
    case "家人初九":
      return {
        meaning: "持家能够预防不测之灾 忧悔消亡",
        videoUrls: ["https://www.youtube.com/embed/2LgzgOmMKvE"],
        references: ["https://www.guoyi360.com/64gua37/xj/5510.html"],
      };
    case "家人六二":
      return {
        meaning:
          "不可随心所欲地追求外部事业与功名 而是尽心竭力的料理家中的饮食起居 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/2LgzgOmMKvE"],
        references: ["https://www.guoyi360.com/64gua37/xj/5511.html"],
      };
    case "家人九三":
      return {
        meaning:
          "治家过于严厉常常因为过分训斥家人而感到后悔 先凶后吉 夫人孩子嬉笑 不加约束 最后会有灾祸",
        videoUrls: ["https://www.youtube.com/embed/2LgzgOmMKvE"],
        references: ["https://www.guoyi360.com/64gua37/xj/5512.html"],
      };
    case "家人六四":
      return {
        meaning: "家庭富裕 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/2LgzgOmMKvE"],
        references: ["https://www.guoyi360.com/64gua37/xj/5513.html"],
      };
    case "家人九五":
      return {
        meaning: "君王治国如治家一样 不必忧虑 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/2LgzgOmMKvE"],
        references: ["https://www.guoyi360.com/64gua37/xj/5514.html"],
      };
    case "家人上九":
      return {
        meaning: "心存诚信 严于持家 最后可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/2LgzgOmMKvE"],
        references: ["https://www.guoyi360.com/64gua37/xj/5515.html"],
      };
    case "睽初九":
      return {
        meaning:
          "忧悔消除 丢失了的马 不必去追逐 马自会返回 谨慎谦虚地对待与自己对立的人 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/jPpKi62dG3A"],
        references: ["https://www.guoyi360.com/64gua38/xj/5518.html"],
      };
    case "睽九二":
      return {
        meaning: "在小巷中遇到主人 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/jPpKi62dG3A"],
        references: ["https://www.guoyi360.com/64gua38/xj/5519.html"],
      };
    case "睽六三":
      return {
        meaning:
          "看见大车艰难前行 驾车的牛受到牵制无法前行 驾车的人受到了 墨刑和劓刑 虽然历经磨难 但最终会有美好结局",
        videoUrls: ["https://www.youtube.com/embed/jPpKi62dG3A"],
        references: ["https://www.guoyi360.com/64gua38/xj/5520.html"],
      };
    case "睽九四":
      return {
        meaning:
          "因心志与众人不和而陷入孤立 但刚好遇到一位贵人 交往中以诚相待 有凶险 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/jPpKi62dG3A"],
        references: ["https://www.guoyi360.com/64gua38/xj/5521.html"],
      }; // @TODO
    case "睽六五":
      return {
        meaning: "忧悔消除 与族人一起吃肉 前进的路上还会有什么灾祸呢",
        videoUrls: ["https://www.youtube.com/embed/jPpKi62dG3A"],
        references: ["https://www.guoyi360.com/64gua38/xj/5522.html"],
      };
    case "睽上九":
      return {
        meaning:
          "处于极其孤立的状态 恍惚之间看到一头背上涂满淤泥的猪 又看到一辆载有一车像鬼一样的人 开始想拉开弓箭准备射击 后来又放下弓箭 原来是迎亲的队伍 有所行动 遇到雨可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/jPpKi62dG3A"],
        references: ["https://www.guoyi360.com/64gua38/xj/5523.html"],
      };
    case "蹇初六":
      return {
        meaning: "有所行动 尽管行事艰难 但归来满载荣誉",
        videoUrls: ["https://www.youtube.com/embed/YP7mPimiqbw"],
        references: ["https://www.guoyi360.com/64gua39/xj/5526.html"],
      };
    case "蹇六二":
      return {
        meaning: "君王与大臣在危难中行走 他们并不是为了自己",
        videoUrls: ["https://www.youtube.com/embed/YP7mPimiqbw"],
        references: ["https://www.guoyi360.com/64gua39/xj/5527.html"],
      }; // @TODO
    case "蹇九三":
      return {
        meaning: "在外行动会遭遇艰难 不如及早返回",
        videoUrls: ["https://www.youtube.com/embed/YP7mPimiqbw"],
        references: ["https://www.guoyi360.com/64gua39/xj/5528.html"],
      };
    case "蹇六四":
      return {
        meaning: "在外行动会遭遇艰难 返回时有车乘",
        videoUrls: ["https://www.youtube.com/embed/YP7mPimiqbw"],
        references: ["https://www.guoyi360.com/64gua39/xj/5529.html"],
      };
    case "蹇九五":
      return {
        meaning: "行事十分艰难 朋友们纷纷来帮助",
        videoUrls: ["https://www.youtube.com/embed/YP7mPimiqbw"],
        references: ["https://www.guoyi360.com/64gua39/xj/5530.html"],
      };
    case "蹇上六":
      return {
        meaning: "外出遭遇艰难 归来硕果累累可获吉祥 有利于大德大才的人出现",
        videoUrls: ["https://www.youtube.com/embed/YP7mPimiqbw"],
        references: ["https://www.guoyi360.com/64gua39/xj/5531.html"],
      };
    case "解初六":
      return {
        meaning: "无灾祸",
        videoUrls: ["https://www.youtube.com/embed/O4uh_7SQ_IM"],
        references: ["https://www.guoyi360.com/64gua40/xj/5534.html"],
      };
    case "解九二":
      return {
        meaning: "打猎时获得三只狐狸 又获得黄色箭矢 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/O4uh_7SQ_IM"],
        references: ["https://www.guoyi360.com/64gua40/xj/5535.html"],
      };
    case "解六三":
      return {
        meaning: "背负着重物出行 招致贼寇抢劫 即使正固 也会有灾祸",
        videoUrls: ["https://www.youtube.com/embed/O4uh_7SQ_IM"],
        references: ["https://www.guoyi360.com/64gua40/xj/5536.html"],
      };
    case "解九四":
      return {
        meaning: "像解开被绑的拇指一般摆脱小人的纠缠 朋友才会心怀诚信前来帮助",
        videoUrls: ["https://www.youtube.com/embed/O4uh_7SQ_IM"],
        references: ["https://www.guoyi360.com/64gua40/xj/5537.html"],
      };
    case "解六五":
      return {
        meaning: "君王被束缚又得到解脱 可获吉祥 能够用诚信感化小人",
        videoUrls: ["https://www.youtube.com/embed/O4uh_7SQ_IM"],
        references: ["https://www.guoyi360.com/64gua40/xj/5538.html"],
      };
    case "解上六":
      return {
        meaning: "王公用弓箭在高处射下一只大隼 并且捕获了 无往不利",
        videoUrls: ["https://www.youtube.com/embed/O4uh_7SQ_IM"],
        references: ["https://www.guoyi360.com/64gua40/xj/5539.html"],
      };
    case "损初九":
      return {
        meaning: "停止自己的事情 尽快帮助他人 无灾祸 要酌情量力而为",
        videoUrls: ["https://www.youtube.com/embed/4wzNvYjrrGM"],
        references: ["https://www.guoyi360.com/64gua41/xj/5562.html"],
      }; // @TODO
    case "损九二":
      return {
        meaning: "有利于正固 出兵征伐有凶险 不要减少 要增加",
        videoUrls: ["https://www.youtube.com/embed/4wzNvYjrrGM"],
        references: ["https://www.guoyi360.com/64gua41/xj/5563.html"],
      }; // @TODO
    case "损六三":
      return {
        meaning:
          "三个人一起前行 有一个人会受到伤害 一个人独行 就会遇到志同道合的朋友",
        videoUrls: ["https://www.youtube.com/embed/4wzNvYjrrGM"],
        references: ["https://www.guoyi360.com/64gua41/xj/5564.html"],
      };
    case "损六四":
      return {
        meaning: "尽快解决自身疾患 迎接喜庆的到来 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/4wzNvYjrrGM"],
        references: ["https://www.guoyi360.com/64gua41/xj/5565.html"],
      };
    case "损六五":
      return {
        meaning: "有人送来价值连城的神龟 不要推辞 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/4wzNvYjrrGM"],
        references: ["https://www.guoyi360.com/64gua41/xj/5566.html"],
      };
    case "损上九":
      return {
        meaning:
          "不要减少 要增加 无灾祸 正固吉祥 适宜有所行动 会得到无私忘家的臣子",
        videoUrls: ["https://www.youtube.com/embed/4wzNvYjrrGM"],
        references: ["https://www.guoyi360.com/64gua41/xj/5567.html"],
      }; // @TODO
    case "益初九":
      return {
        meaning: "有利于大展宏图 大吉大利 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/sEVZTXq73bw"],
        references: ["https://www.guoyi360.com/64gua42/xj/5582.html"],
      };
    case "益六二":
      return {
        meaning:
          "有人送来价值连城的神龟 不要推辞 恒久之事 正固吉祥 君王祭祀先帝 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/sEVZTXq73bw"],
        references: ["https://www.guoyi360.com/64gua42/xj/5583.html"],
      };
    case "益六三":
      return {
        meaning:
          "将得到的好处来救助凶险之事 无灾祸 要以诚相待 时刻像手执玉圭向王公告急求助那样谨慎",
        videoUrls: ["https://www.youtube.com/embed/sEVZTXq73bw"],
        references: ["https://www.guoyi360.com/64gua42/xj/5584.html"],
      };
    case "益六四":
      return {
        meaning:
          "执持守中正道谨慎行事 得到王公信任 有利于凭此来完成迁都利民的大业",
        videoUrls: ["https://www.youtube.com/embed/sEVZTXq73bw"],
        references: ["https://www.guoyi360.com/64gua42/xj/5585.html"],
      };
    case "益九五":
      return {
        meaning:
          "心中有诚信 不用占问 就是 大吉大利 天下人一定会以仁爱之心回报我的仁爱之德",
        videoUrls: ["https://www.youtube.com/embed/sEVZTXq73bw"],
        references: ["https://www.guoyi360.com/64gua42/xj/5586.html"],
      };
    case "益上九":
      return {
        meaning: "没有得到增益 或者受到攻击 树立决心不够坚定 有凶险",
        videoUrls: ["https://www.youtube.com/embed/sEVZTXq73bw"],
        references: ["https://www.guoyi360.com/64gua42/xj/5587.html"],
      }; // @TODO
    case "夬初九":
      return {
        meaning: "脚趾前部粗壮 冒然前行不会取胜 会招致灾祸",
        videoUrls: ["https://www.youtube.com/embed/t8-ZnwIKvqc"],
        references: ["https://www.guoyi360.com/64gua43/xj/5593.html"],
      };
    case "夬九二":
      return {
        meaning: "受到惊吓发出声音 深夜有军队经过 不用担心",
        videoUrls: ["https://www.youtube.com/embed/t8-ZnwIKvqc"],
        references: ["https://www.guoyi360.com/64gua43/xj/5594.html"],
      };
    case "夬九三":
      return {
        meaning:
          "面颊之间的骨头强壮 有凶险 君子毅然前行 独自遇雨受淋雨水淋湿了衣服 尽管有怨怒 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/t8-ZnwIKvqc"],
        references: ["https://www.guoyi360.com/64gua43/xj/5595.html"],
      };
    case "夬九四":
      return {
        meaning:
          "臀部无皮 行走艰难 如果能牵羊而行 忧悔消除 无耐听了这话的人并不相信",
        videoUrls: ["https://www.youtube.com/embed/t8-ZnwIKvqc"],
        references: ["https://www.guoyi360.com/64gua43/xj/5596.html"],
      };
    case "夬九五":
      return {
        meaning: "细角山羊毅然前行 守中正道 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/t8-ZnwIKvqc"],
        references: ["https://www.guoyi360.com/64gua43/xj/5597.html"],
      };
    case "夬上六":
      return {
        meaning: "不要大声发出声音 因为凶险最终会到来",
        videoUrls: ["https://www.youtube.com/embed/t8-ZnwIKvqc"],
        references: ["https://www.guoyi360.com/64gua43/xj/5598.html"],
      };
    case "姤初六":
      return {
        meaning:
          "紧紧缚在金属织具上 正固吉祥 急于有所行动 会遭遇到凶险 就像猪被捆绑住竭力挣扎一样",
        videoUrls: ["https://www.youtube.com/embed/D305yChuOgA"],
        references: ["https://www.guoyi360.com/64gua44/xj/5616.html"],
      };
    case "姤九二":
      return {
        meaning: "厨房有鱼 无灾祸 不适宜宴请宾客",
        videoUrls: ["https://www.youtube.com/embed/D305yChuOgA"],
        references: ["https://www.guoyi360.com/64gua44/xj/5617.html"],
      };
    case "姤九三":
      return {
        meaning: "屁股上没有皮肤 走路会很艰难 有危险 但无大灾祸",
        videoUrls: ["https://www.youtube.com/embed/D305yChuOgA"],
        references: ["https://www.guoyi360.com/64gua44/xj/5618.html"],
      };
    case "姤九四":
      return {
        meaning: "厨房无鱼 会引发凶险",
        videoUrls: ["https://www.youtube.com/embed/D305yChuOgA"],
        references: ["https://www.guoyi360.com/64gua44/xj/5619.html"],
      };
    case "姤九五":
      return {
        meaning: "用杞树萌护树下的瓜果 象征着蕴藏彰美之徳 会喜从天降",
        videoUrls: ["https://www.youtube.com/embed/D305yChuOgA"],
        references: ["https://www.guoyi360.com/64gua44/xj/5620.html"],
      }; // @TODO
    case "姤上九":
      return {
        meaning: "走入空荡的角落里 凶险 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/D305yChuOgA"],
        references: ["https://www.guoyi360.com/64gua44/xj/5621.html"],
      };
    case "萃初六":
      return {
        meaning:
          "心怀诚信但没有坚持到最后 出现了混乱与新的聚集 如果发出大的声音 就在此时占卜到 一握之数 随后大笑 不用忧虑 有所行动无灾祸",
        videoUrls: ["https://www.youtube.com/embed/iv8astOXRS8"],
        references: ["https://www.guoyi360.com/64gua45/xj/5624.html"],
      }; // @TODO
    case "萃六二":
      return {
        meaning: "迎来吉祥 无灾祸 心怀诚信有利于祭祀求福",
        videoUrls: ["https://www.youtube.com/embed/iv8astOXRS8"],
        references: ["https://www.guoyi360.com/64gua45/xj/5625.html"],
      };
    case "萃六三":
      return {
        meaning: "由于汇聚而产生叹息 无益处 有所行动无灾祸 小凶险",
        videoUrls: ["https://www.youtube.com/embed/iv8astOXRS8"],
        references: ["https://www.guoyi360.com/64gua45/xj/5626.html"],
      };
    case "萃九四":
      return {
        meaning: "大的吉祥 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/iv8astOXRS8"],
        references: ["https://www.guoyi360.com/64gua45/xj/5627.html"],
      };
    case "萃九五":
      return {
        meaning:
          "汇聚而适得其位 无灾祸 但还不能获取众人的信任 开始并持续正固 忧悔消除",
        videoUrls: ["https://www.youtube.com/embed/iv8astOXRS8"],
        references: ["https://www.guoyi360.com/64gua45/xj/5628.html"],
      };
    case "萃上六":
      return {
        meaning: "悲伤叹息又痛哭流涕 没灾祸",
        videoUrls: ["https://www.youtube.com/embed/iv8astOXRS8"],
        references: ["https://www.guoyi360.com/64gua45/xj/5629.html"],
      };
    case "升初六":
      return {
        meaning: "不断长进上升 大的吉祥",
        videoUrls: ["https://www.youtube.com/embed/Md-pb80QYtI"],
        references: ["https://www.guoyi360.com/64gua46/xj/5636.html"],
      };
    case "升九二":
      return {
        meaning: "心怀诚信有助于祭祀求福 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/Md-pb80QYtI"],
        references: ["https://www.guoyi360.com/64gua46/xj/5637.html"],
      };
    case "升九三":
      return {
        meaning: "上升到空旷的城邑 如入无人之境",
        videoUrls: ["https://www.youtube.com/embed/Md-pb80QYtI"],
        references: ["https://www.guoyi360.com/64gua46/xj/5638.html"],
      };
    case "升六四":
      return {
        meaning: "君王来到岐山祭祀神灵 可获吉祥 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/Md-pb80QYtI"],
        references: ["https://www.guoyi360.com/64gua46/xj/5639.html"],
      };
    case "升六五":
      return {
        meaning: "正固吉祥 步步高升",
        videoUrls: ["https://www.youtube.com/embed/Md-pb80QYtI"],
        references: ["https://www.guoyi360.com/64gua46/xj/5640.html"],
      };
    case "升上六":
      return {
        meaning: "深夜还要上升 有利于停止上升而正固",
        videoUrls: ["https://www.youtube.com/embed/Md-pb80QYtI"],
        references: ["https://www.guoyi360.com/64gua46/xj/5641.html"],
      };
    case "困初六":
      return {
        meaning: "困坐在树干上无法安身 只得退居幽暗的山谷里 三年不能露面",
        videoUrls: ["https://www.youtube.com/embed/zroiV_ye60Y"],
        references: ["https://www.guoyi360.com/64gua47/xj/5649.html"],
      };
    case "困九二":
      return {
        meaning:
          "喝醉了酒 大红祭祀衣服刚刚送来 正好用来祭祀 此时出兵征伐有凶险 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/zroiV_ye60Y"],
        references: ["https://www.guoyi360.com/64gua47/xj/5650.html"],
      };
    case "困六三":
      return {
        meaning:
          "被困到乱石之中 靠着有刺的荆棘爬了出来 回到家中 看不到妻子 有凶险",
        videoUrls: ["https://www.youtube.com/embed/zroiV_ye60Y"],
        references: ["https://www.guoyi360.com/64gua47/xj/5651.html"],
      };
    case "困九四":
      return {
        meaning:
          "迈着步子缓缓走来 被一辆豪华的大车挡住了去路 有麻烦 但会有好的结果",
        videoUrls: ["https://www.youtube.com/embed/zroiV_ye60Y"],
        references: ["https://www.guoyi360.com/64gua47/xj/5652.html"],
      };
    case "困九五":
      return {
        meaning:
          "使用割鼻断足刑罚来治理众人 困难是因红色祭服引起 因而就渐渐的不再穿了 有利于祭祀",
        videoUrls: ["https://www.youtube.com/embed/zroiV_ye60Y"],
        references: ["https://www.guoyi360.com/64gua47/xj/5653.html"],
      };
    case "困上六":
      return {
        meaning:
          "被葛藤纠缠的惶恐不安有所行动会感到后悔 应该幡然悔悟 出兵征伐 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/zroiV_ye60Y"],
        references: ["https://www.guoyi360.com/64gua47/xj/5654.html"],
      };
    case "井初六":
      return {
        meaning: "井底污泥淤积 井水已经不能再食用 井枯树死 飞鸟再也不来栖息",
        videoUrls: ["https://www.youtube.com/embed/xw4Oyuddkn0"],
        references: ["https://www.guoyi360.com/64gua48/xj/5657.html"],
      };
    case "井九二":
      return {
        meaning: "井中积水处被当作捉鱼的场所 用来打水的瓦罐破漏不能再用",
        videoUrls: ["https://www.youtube.com/embed/xw4Oyuddkn0"],
        references: ["https://www.guoyi360.com/64gua48/xj/5658.html"],
      };
    case "井九三":
      return {
        meaning:
          "井中淤泥已被清除仍然没有人取水食用 让人心生悲伤 井水已可食用 应该尽快来取水 君王圣明 与臣民共享恩泽",
        videoUrls: ["https://www.youtube.com/embed/xw4Oyuddkn0"],
        references: ["https://www.guoyi360.com/64gua48/xj/5659.html"],
      }; // @TODO
    case "井六四":
      return {
        meaning: "修整井壁 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/xw4Oyuddkn0"],
        references: ["https://www.guoyi360.com/64gua48/xj/5660.html"],
      };
    case "井九五":
      return {
        meaning: "井水清澈明净 就像甘甜凉爽的泉水一样 可供饮用",
        videoUrls: ["https://www.youtube.com/embed/xw4Oyuddkn0"],
        references: ["https://www.guoyi360.com/64gua48/xj/5661.html"],
      };
    case "井上六":
      return {
        meaning: "修整水井的事已然完成 无需再盖井口 此时心怀诚信 大吉大利",
        videoUrls: ["https://www.youtube.com/embed/xw4Oyuddkn0"],
        references: ["https://www.guoyi360.com/64gua48/xj/5662.html"],
      };
    case "革初九":
      return {
        meaning: "用黄牛皮绳牢牢拴住 以免轻举妄动",
        videoUrls: ["https://www.youtube.com/embed/IicUkJcabq8"],
        references: ["https://www.guoyi360.com/64gua49/xj/5669.html"],
      };
    case "革六二":
      return {
        meaning: "到了己日断然进行改革 出兵讨伐可获吉祥 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/IicUkJcabq8"],
        references: ["https://www.guoyi360.com/64gua49/xj/5676.html"],
      };
    case "革九三":
      return {
        meaning:
          "出兵征伐会有凶险 即使正固也有危险 变革要集思广益 行动时要有诚信",
        videoUrls: ["https://www.youtube.com/embed/IicUkJcabq8"],
        references: ["https://www.guoyi360.com/64gua49/xj/5677.html"],
      };
    case "革九四":
      return {
        meaning: "忧悔消除 行动时要有诚信 改朝换代 顺天应命 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/IicUkJcabq8"],
        references: ["https://www.guoyi360.com/64gua49/xj/5678.html"],
      };
    case "革九五":
      return {
        meaning:
          "有才能的人变革时气势会像老虎一样威猛 不必占卜 也能光大诚信的美德",
        videoUrls: ["https://www.youtube.com/embed/IicUkJcabq8"],
        references: ["https://www.guoyi360.com/64gua49/xj/5679.html"],
      }; // @TODO
    case "革上六":
      return {
        meaning:
          "有才能的人变革时行动会像豹子一样迅速 小人改变往日的面目 出兵讨伐会有凶险 居家守中 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/IicUkJcabq8"],
        references: ["https://www.guoyi360.com/64gua49/xj/5680.html"],
      };
    case "鼎初六":
      return {
        meaning:
          "大鼎翻倒 其足向上 适宜倒掉无用之物 就如同妻妾生子 其妾因子而被扶作正室 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/E83Hjgi0li0"],
        references: ["https://www.guoyi360.com/64gua50/xj/5713.html"],
      };
    case "鼎九二":
      return {
        meaning: "鼎中盛满食物 容易招来敌对者的嫉妒 不能靠近我 可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/E83Hjgi0li0"],
        references: ["https://www.guoyi360.com/64gua50/xj/5714.html"],
      }; // @TODO
    case "鼎九三":
      return {
        meaning:
          "鼎的耳朵被破坏了 无法被移动 鼎里的山鸡汤也喝不成了 待到阴阳调和 润雨出现才能消除悔恨 最终可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/E83Hjgi0li0"],
        references: ["https://www.guoyi360.com/64gua50/xj/5715.html"],
      };
    case "鼎九四":
      return {
        meaning:
          "大鼎那堪重负导致鼎足断折 王公的美食都被倾倒出来 鼎身沾满污物 有凶险",
        videoUrls: ["https://www.youtube.com/embed/E83Hjgi0li0"],
        references: ["https://www.guoyi360.com/64gua50/xj/5716.html"],
      };
    case "鼎六五":
      return {
        meaning: "大鼎配备上黄色的耳饰 鼎耳配备上铜制的吊环 有利于正固",
        videoUrls: ["https://www.youtube.com/embed/E83Hjgi0li0"],
        references: ["https://www.guoyi360.com/64gua50/xj/5717.html"],
      };
    case "鼎上九":
      return {
        meaning: "鼎耳配有玉制的吊环 大为吉利 无所不利",
        videoUrls: ["https://www.youtube.com/embed/E83Hjgi0li0"],
        references: ["https://www.guoyi360.com/64gua50/xj/5718.html"],
      };
    case "震初九":
      return {
        meaning: "雷霆极响 震的万物惊惶恐惧 虽有有谈笑风生 吉祥",
        videoUrls: ["https://www.youtube.com/embed/msxEc57-I2"],
        references: ["https://www.guoyi360.com/64gua51/xj/5721.html"],
      };
    case "震六二":
      return {
        meaning:
          "雷霆极响待来危险 丢失钱财 应该登上九重高陵 不要追逐 七天内会失而复得",
        videoUrls: ["https://www.youtube.com/embed/msxEc57-I2"],
        references: ["https://www.guoyi360.com/64gua51/xj/5722.html"],
      };
    case "震六三":
      return {
        meaning: "雷霆震动 惊惶不安 伴随着震动前行 无灾难",
        videoUrls: ["https://www.youtube.com/embed/msxEc57-I2"],
        references: ["https://www.guoyi360.com/64gua51/xj/5723.html"],
      };
    case "震九四":
      return {
        meaning: "雷霆震动 惊慌失措 落入泥中",
        videoUrls: ["https://www.youtube.com/embed/msxEc57-I2"],
        references: ["https://www.guoyi360.com/64gua51/xj/5724.html"],
      };
    case "震六五":
      return {
        meaning: "雷霆震动 上下往来都有危险 但无重大损失 会有事发生",
        videoUrls: ["https://www.youtube.com/embed/msxEc57-I2"],
        references: ["https://www.guoyi360.com/64gua51/xj/5725.html"],
      };
    case "震上六":
      return {
        meaning:
          "雷霆震动 瑟瑟发抖 六神无主 出兵征伐有凶险 震动不是来自于自身而是来自于旁边的人 无灾祸 婚配会有责怪之言",
        videoUrls: ["https://www.youtube.com/embed/msxEc57-I2"],
        references: ["https://www.guoyi360.com/64gua51/xj/5726.html"],
      };
    case "艮初六":
      return {
        meaning: "抑制脚趾使其难以起步 无灾祸 有利于占问长久之事",
        videoUrls: ["https://www.youtube.com/embed/6Tq3qdjdrX8"],
        references: ["https://www.guoyi360.com/64gua52/xj/5729.html"],
      };
    case "艮六二":
      return {
        meaning: "抑制小腿肚运动 无法举步追赶应该追随的人 心中不能舒畅",
        videoUrls: ["https://www.youtube.com/embed/6Tq3qdjdrX8"],
        references: ["https://www.guoyi360.com/64gua52/xj/5730.html"],
      }; // @TODO
    case "艮九三":
      return {
        meaning:
          "抑制腰部运动 以至于撕裂了夹脊肉 凶险就像烈火烧灼 让人心急如焚",
        videoUrls: ["https://www.youtube.com/embed/6Tq3qdjdrX8"],
        references: ["https://www.guoyi360.com/64gua52/xj/5731.html"],
      };
    case "艮六四":
      return {
        meaning: "抑制身体上部运动 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/6Tq3qdjdrX8"],
        references: ["https://www.guoyi360.com/64gua52/xj/5732.html"],
      };
    case "艮六五":
      return {
        meaning: "抑制脸颊运动 使之说话有条理 忧悔消除",
        videoUrls: ["https://www.youtube.com/embed/6Tq3qdjdrX8"],
        references: ["https://www.guoyi360.com/64gua52/xj/5733.html"],
      };
    case "艮上九":
      return {
        meaning: "敦厚的美德压制邪欲恶念 吉祥",
        videoUrls: ["https://www.youtube.com/embed/6Tq3qdjdrX8"],
        references: ["https://www.guoyi360.com/64gua52/xj/5734.html"],
      };
    case "渐初六":
      return {
        meaning: "鸿雁飞行渐进到了河岸边 小雁有危险 被大雁叫住 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/dp_QYXmiDOk"],
        references: ["https://www.guoyi360.com/64gua53/xj/5737.html"],
      };
    case "渐六二":
      return {
        meaning: "鸿雁飞行渐进到了磐石上 饮食和乐 吉祥",
        videoUrls: ["https://www.youtube.com/embed/dp_QYXmiDOk"],
        references: ["https://www.guoyi360.com/64gua53/xj/5738.html"],
      };
    case "渐九三":
      return {
        meaning:
          "鸿雁飞行渐进到了小山顶上 丈夫征战未归 妻子怀孕流产 凶险之兆 但有利于抗击盗寇",
        videoUrls: ["https://www.youtube.com/embed/dp_QYXmiDOk"],
        references: ["https://www.guoyi360.com/64gua53/xj/5739.html"],
      };
    case "渐六四":
      return {
        meaning: "鸿雁飞行渐进到了大树上 有的落到树枝上 没灾祸",
        videoUrls: ["https://www.youtube.com/embed/dp_QYXmiDOk"],
        references: ["https://www.guoyi360.com/64gua53/xj/5740.html"],
      };
    case "渐九五":
      return {
        meaning:
          "鸿雁飞行渐进到了山丘上 妇女三年不能怀孕 但邪不压正 最终可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/dp_QYXmiDOk"],
        references: ["https://www.guoyi360.com/64gua53/xj/5741.html"],
      }; // @TODO
    case "渐上九":
      return {
        meaning:
          "鸿雁飞行渐进到了小山顶上 羽毛美丽到可以用来做仪式的上用的装饰 吉祥",
        videoUrls: ["https://www.youtube.com/embed/dp_QYXmiDOk"],
        references: ["https://www.guoyi360.com/64gua53/xj/5742.html"],
      };
    case "归妹初九":
      return {
        meaning:
          "少女出嫁 妹妹作为从嫁做偏房 就像跛脚的人奋力前行 出兵征伐可获吉祥",
        videoUrls: ["https://www.youtube.com/embed/yVu6ucdn4CY"],
        references: ["https://www.guoyi360.com/64gua54/xj/5754.html"],
      };
    case "归妹九二":
      return {
        meaning: "视力不好的人勉强凝视 有利于安恬隐居之人占问",
        videoUrls: ["https://www.youtube.com/embed/yVu6ucdn4CY"],
        references: ["https://www.guoyi360.com/64gua54/xj/5768.html"],
      };
    case "归妹六三":
      return {
        meaning:
          "少女出嫁 姐姐作为从嫁做偏房 被遣回娘家 又以妹妹的身份从嫁做偏房",
        videoUrls: ["https://www.youtube.com/embed/yVu6ucdn4CY"],
        references: ["https://www.guoyi360.com/64gua54/xj/5769.html"],
      }; // @TODO
    case "归妹九四":
      return {
        meaning: "少女出嫁多次延期 迟迟未嫁 为的是等待时机出嫁",
        videoUrls: ["https://www.youtube.com/embed/yVu6ucdn4CY"],
        references: ["https://www.guoyi360.com/64gua54/xj/5770.html"],
      };
    case "归妹六五":
      return {
        meaning:
          "帝乙嫁女 正室的服装反而不如陪嫁妹妹的服装华丽 成亲之日定在既望之日 吉祥",
        videoUrls: ["https://www.youtube.com/embed/yVu6ucdn4CY"],
        references: ["https://www.guoyi360.com/64gua54/xj/5771.html"],
      };
    case "归妹上六":
      return {
        meaning: "新娘提着空篮子里面没有果实 新郎杀羊却未见羊血 无益处",
        videoUrls: ["https://www.youtube.com/embed/yVu6ucdn4CY"],
        references: ["https://www.guoyi360.com/64gua54/xj/5772.html"],
      };
    case "丰初九":
      return {
        meaning: "遇到与自己匹配的人 十日内无灾祸 前往会得到尊重",
        videoUrls: ["https://www.youtube.com/embed/dQvW4bxWbAQ"],
        references: ["https://www.guoyi360.com/64gua55/xj/5802.html"],
      }; // @TODO
    case "丰六二":
      return {
        meaning:
          "草棚遮蔽很大 中午出现满天星斗 有所举动会受人猜忌 心怀诚信悔消除疑虑 吉祥",
        videoUrls: ["https://www.youtube.com/embed/dQvW4bxWbAQ"],
        references: ["https://www.guoyi360.com/64gua55/xj/5803.html"],
      }; // @TODO
    case "丰九三":
      return {
        meaning: "丰厚遮掩了光明的幔帐 中午一片昏暗 此时折断了右臂 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/dQvW4bxWbAQ"],
        references: ["https://www.guoyi360.com/64gua55/xj/5804.html"],
      };
    case "丰九四":
      return {
        meaning: "草棚遮蔽很大 中午出现满天星斗 遇到外邦的主人 吉祥",
        videoUrls: ["https://www.youtube.com/embed/dQvW4bxWbAQ"],
        references: ["https://www.guoyi360.com/64gua55/xj/5805.html"],
      }; // @TODO
    case "丰六五":
      return {
        meaning: "迎接光明 会带来喜庆与赞誉 吉祥",
        videoUrls: ["https://www.youtube.com/embed/dQvW4bxWbAQ"],
        references: ["https://www.guoyi360.com/64gua55/xj/5806.html"],
      };
    case "丰上六":
      return {
        meaning:
          "房屋高大 遮蔽了其他人家 从门缝里往里面看 里面空无一人 三年不见有人 凶险",
        videoUrls: ["https://www.youtube.com/embed/dQvW4bxWbAQ"],
        references: ["https://www.guoyi360.com/64gua55/xj/5807.html"],
      };
    case "旅初六":
      return {
        meaning: "外出旅行猥猥琐琐 举止多变 会招致灾祸",
        videoUrls: ["https://www.youtube.com/embed/lamIrtRAYEY"],
        references: ["https://www.guoyi360.com/64gua56/xj/5815.html"],
      };
    case "旅六二":
      return {
        meaning: "旅行的人入住客店 怀里揣着钱财 得到僮仆的诚信侍奉",
        videoUrls: ["https://www.youtube.com/embed/lamIrtRAYEY"],
        references: ["https://www.guoyi360.com/64gua56/xj/5816.html"],
      }; // @TODO
    case "旅九三":
      return {
        meaning: "客店失了大火 童仆也跑了 即使正固也有危险",
        videoUrls: ["https://www.youtube.com/embed/lamIrtRAYEY"],
        references: ["https://www.guoyi360.com/64gua56/xj/5817.html"],
      };
    case "旅九四":
      return {
        meaning: "旅行遭遇阻碍 尽管得到了一些钱财 但心中依然不愉快",
        videoUrls: ["https://www.youtube.com/embed/lamIrtRAYEY"],
        references: ["https://www.guoyi360.com/64gua56/xj/5818.html"],
      };
    case "旅六五":
      return {
        meaning: "射杀野鸡 丢了一支箭矢 但到最后获得赞誉并受到封爵",
        videoUrls: ["https://www.youtube.com/embed/lamIrtRAYEY"],
        references: ["https://www.guoyi360.com/64gua56/xj/5819.html"],
      };
    case "旅上九":
      return {
        meaning:
          "树上的鸟烧了自己的巢穴 旅行的人先笑后大哭 田边丢了牛 凶险之兆",
        videoUrls: ["https://www.youtube.com/embed/lamIrtRAYEY"],
        references: ["https://www.guoyi360.com/64gua56/xj/5820.html"],
      };
    case "巽初六":
      return {
        meaning: "进进退退 停滞不前 有利于勇敢的人占问",
        videoUrls: ["https://www.youtube.com/embed/SF2--MF7yls"],
        references: [""],
      };
    case "巽九二":
      return {
        meaning:
          "过分顺从而屈居床下 若过能效仿 巫师 勤勉忙碌的样子 吉祥 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/SF2--MF7yls"],
        references: [""],
      };
    case "巽九三":
      return {
        meaning: "一而再再而三的顺从他人 有凶险",
        videoUrls: ["https://www.youtube.com/embed/SF2--MF7yls"],
        references: [""],
      };
    case "巽六四":
      return {
        meaning: "忧悔消除 打猎时捕获了三头禽兽",
        videoUrls: ["https://www.youtube.com/embed/SF2--MF7yls"],
        references: [""],
      };
    case "巽九五":
      return {
        meaning:
          "正固吉祥 忧悔消除 无所不利 起初不顺利 但最后能畅通无阻 时间是 丁日 戊日 己日 和 辛日 壬日 癸日 吉祥",
        videoUrls: ["https://www.youtube.com/embed/SF2--MF7yls"],
        references: [""],
      }; // @TODO
    case "巽上九":
      return {
        meaning:
          "过分顺从而屈居床下 结果 失掉了 财产和利斧之助 即使正固也会有凶险",
        videoUrls: ["https://www.youtube.com/embed/SF2--MF7yls"],
        references: [""],
      }; // @TODO
    case "兑初九":
      return {
        meaning: "平和喜悦的待人态度 有利于正固",
        videoUrls: ["https://www.youtube.com/embed/QGSjxXkQ5Ws"],
        references: ["https://www.guoyi360.com/64gua58/xj/5961.html"],
      };
    case "兑九二":
      return {
        meaning: "心怀诚信的待人态度 吉祥 忧悔消除",
        videoUrls: ["https://www.youtube.com/embed/QGSjxXkQ5Ws"],
        references: ["https://www.guoyi360.com/64gua58/xj/5962.html"],
      };
    case "兑六三":
      return {
        meaning: "前来求的喜悦 有凶险",
        videoUrls: ["https://www.youtube.com/embed/QGSjxXkQ5Ws"],
        references: ["https://www.guoyi360.com/64gua58/xj/5963.html"],
      };
    case "兑九四":
      return {
        meaning: "商议之中和睦欢愉 但事情没有办成 消除小毛病会有喜庆之事",
        videoUrls: ["https://www.youtube.com/embed/QGSjxXkQ5Ws"],
        references: ["https://www.guoyi360.com/64gua58/xj/5964.html"],
      };
    case "兑九五":
      return {
        meaning: "信任剥蚀阳刚的小人 有危险",
        videoUrls: ["https://www.youtube.com/embed/QGSjxXkQ5Ws"],
        references: ["https://www.guoyi360.com/64gua58/xj/5965.html"],
      };
    case "兑上六":
      return {
        meaning: "引诱别人与自己一起欢悦",
        videoUrls: ["https://www.youtube.com/embed/QGSjxXkQ5Ws"],
        references: ["https://www.guoyi360.com/64gua58/xj/5966.html"],
      };
    case "涣初六":
      return {
        meaning: "乘强壮之马去救济患难 吉祥",
        videoUrls: ["https://www.youtube.com/embed/DI7SkvWsvr0"],
        references: ["https://www.guoyi360.com/64gua59/xj/5980.html"],
      };
    case "涣九二":
      return {
        meaning: "大水流散 赶忙跑到 祭祀的案台 以祭告神灵祈求帮助 忧悔消除",
        videoUrls: ["https://www.youtube.com/embed/DI7SkvWsvr0"],
        references: ["https://www.guoyi360.com/64gua59/xj/5981.html"],
      };
    case "涣六三":
      return {
        meaning: "大水冲击自身 没有悔恨",
        videoUrls: ["https://www.youtube.com/embed/DI7SkvWsvr0"],
        references: ["https://www.guoyi360.com/64gua59/xj/5987.html"],
      };
    case "涣六四":
      return {
        meaning:
          "大水冲散了众人 大吉大利 大水冲上山陵 水势汹涌 可不是日常能够想象得到的",
        videoUrls: ["https://www.youtube.com/embed/DI7SkvWsvr0"],
        references: ["https://www.guoyi360.com/64gua59/xj/5988.html"],
      };
    case "涣九五":
      return {
        meaning:
          "像出汗一样不停的颁布君王诏命 并疏散君王聚敛的财富来救助天下百姓 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/DI7SkvWsvr0"],
        references: ["https://www.guoyi360.com/64gua59/xj/5989.html"],
      }; // @TODO
    case "涣上九":
      return {
        meaning: "大水流散 能使得忧患消除 惊惧化解 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/DI7SkvWsvr0"],
        references: ["https://www.guoyi360.com/64gua59/xj/5990.html"],
      };
    case "节初九":
      return {
        meaning: "不出自家内院 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/CZm-D1a6gew"],
        references: ["https://www.guoyi360.com/64gua60/xj/6012.html"],
      };
    case "节九二":
      return {
        meaning: "不出自家前院 有凶险",
        videoUrls: ["https://www.youtube.com/embed/CZm-D1a6gew"],
        references: ["https://www.guoyi360.com/64gua60/xj/6013.html"],
      };
    case "节六三":
      return {
        meaning: "不节制自己 就会哀叹悲伤 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/CZm-D1a6gew"],
        references: ["https://www.guoyi360.com/64gua60/xj/6014.html"],
      };
    case "节六四":
      return {
        meaning: "安守于节俭 通达顺畅",
        videoUrls: ["https://www.youtube.com/embed/CZm-D1a6gew"],
        references: ["https://www.guoyi360.com/64gua60/xj/6015.html"],
      };
    case "节九五":
      return {
        meaning: "以节俭为乐事 吉祥 有所行动必会得到奖赏",
        videoUrls: ["https://www.youtube.com/embed/CZm-D1a6gew"],
        references: ["https://www.guoyi360.com/64gua60/xj/6016.html"],
      };
    case "节上六":
      return {
        meaning: "过度节俭 即使正固也有凶险 忧悔消除",
        videoUrls: ["https://www.youtube.com/embed/CZm-D1a6gew"],
        references: ["https://www.guoyi360.com/64gua60/xj/6017.html"],
      };
    case "中孚初九":
      return {
        meaning: "安守诚信之徳吉祥之兆 假如有别的想法则不会安宁",
        videoUrls: ["https://www.youtube.com/embed/4LUN-J1EC_M"],
        references: ["https://www.guoyi360.com/64gua61/xj/6020.html"],
      };
    case "中孚九二":
      return {
        meaning: "鹤在树荫下鸣叫 小鹤应声附和 我有美酒一爵 愿与你共享其安乐",
        videoUrls: ["https://www.youtube.com/embed/4LUN-J1EC_M"],
        references: ["https://www.guoyi360.com/64gua61/xj/6021.html"],
      };
    case "中孚六三":
      return {
        meaning:
          "遭遇强大的对手 有时击鼓奋进 有时疲惫不前 有时悲愤哭泣 有时慷慨高歌",
        videoUrls: ["https://www.youtube.com/embed/4LUN-J1EC_M"],
        references: ["https://www.guoyi360.com/64gua61/xj/6022.html"],
      };
    case "中孚六四":
      return {
        meaning: "在既望这一天 走失了一匹好马 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/4LUN-J1EC_M"],
        references: ["https://www.guoyi360.com/64gua61/xj/6023.html"],
      };
    case "中孚九五":
      return {
        meaning: "胸怀诚信并惦念他人 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/4LUN-J1EC_M"],
        references: ["https://www.guoyi360.com/64gua61/xj/6024.html"],
      };
    case "中孚上九":
      return {
        meaning: "鸡鸣之声响彻天空 有凶险",
        videoUrls: ["https://www.youtube.com/embed/4LUN-J1EC_M"],
        references: ["https://www.guoyi360.com/64gua61/xj/6025.html"],
      };
    case "小过初六":
      return {
        meaning: "飞鸟带来了危险的兆头",
        videoUrls: ["https://www.youtube.com/embed/HtqPzOC6Xwc"],
        references: ["https://www.guoyi360.com/64gua62/xj/6030.html"],
      };
    case "小过六二":
      return {
        meaning: "越过祖父 遇见祖母 不到君王那里 而与其臣子接触 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/HtqPzOC6Xwc"],
        references: ["https://www.guoyi360.com/64gua62/xj/6031.html"],
      }; // @TODO
    case "小过九三":
      return {
        meaning: "不严加防范 会有被杀害的危险 有凶险",
        videoUrls: ["https://www.youtube.com/embed/HtqPzOC6Xwc"],
        references: ["https://www.guoyi360.com/64gua62/xj/6032.html"],
      };
    case "小过九四":
      return {
        meaning:
          "无灾祸 不要过分求进而强和他人遇合 有所行动会有危险 必须加以警惕 占问长久的事情 筮得此爻 不宜施行",
        videoUrls: ["https://www.youtube.com/embed/HtqPzOC6Xwc"],
        references: ["https://www.guoyi360.com/64gua62/xj/6033.html"],
      }; // @TODO
    case "小过六五":
      return {
        meaning:
          "乌云密布却没有下雨 云气从西边郊区升起 王公狩猎射中了一只飞鸟 追到洞穴里才捕捉到",
        videoUrls: ["https://www.youtube.com/embed/HtqPzOC6Xwc"],
        references: ["https://www.guoyi360.com/64gua62/xj/6034.html"],
      };
    case "小过上六":
      return {
        meaning:
          "不要过分求进而强和他人遇合 就像飞鸟容易被射中 捕获 非常凶险 这就是灾难",
        videoUrls: ["https://www.youtube.com/embed/HtqPzOC6Xwc"],
        references: ["https://www.guoyi360.com/64gua62/xj/6035.html"],
      };
    case "既济初九":
      return {
        meaning: "牵引着车轮前行 水弄湿了车尾 无灾祸",
        videoUrls: ["https://www.youtube.com/embed/LW2Gd7G9_R8"],
        references: ["https://www.guoyi360.com/64gua63/xj/6038.html"],
      };
    case "既济六二":
      return {
        meaning: "妇人丢失了首饰 不要寻找 七日内会失而复得",
        videoUrls: ["https://www.youtube.com/embed/LW2Gd7G9_R8"],
        references: ["https://www.guoyi360.com/64gua63/xj/6039.html"],
      };
    case "既济九三":
      return {
        meaning: "殷商君王攻打鬼方国 历经三年才打败鬼方 事关重大 不能重用小人",
        videoUrls: ["https://www.youtube.com/embed/LW2Gd7G9_R8"],
        references: ["https://www.guoyi360.com/64gua63/xj/6040.html"],
      };
    case "既济六四":
      return {
        meaning: "华服即将变成破衣 应当始终警惕以防灾祸",
        videoUrls: ["https://www.youtube.com/embed/LW2Gd7G9_R8"],
        references: ["https://www.guoyi360.com/64gua63/xj/6041.html"],
      };
    case "既济九五":
      return {
        meaning:
          "东面的邻国杀牛举行盛大的祭祀 不入西边的邻国举行简单的祭祀那样实享天福",
        videoUrls: ["https://www.youtube.com/embed/LW2Gd7G9_R8"],
        references: ["https://www.guoyi360.com/64gua63/xj/6042.html"],
      };
    case "既济上六":
      return {
        meaning: "水沾湿了头颅 有危险",
        videoUrls: ["https://www.youtube.com/embed/LW2Gd7G9_R8"],
        references: ["https://www.guoyi360.com/64gua63/xj/6043.html"],
      };
    case "未济初六":
      return {
        meaning: "水沾湿了尾巴 灾祸",
        videoUrls: ["https://www.youtube.com/embed/bmbuBGNBTSU"],
        references: ["https://www.guoyi360.com/64gua64/xj/6046.html"],
      };
    case "未济九二":
      return {
        meaning: "向后拖拽车轮而放缓前进的速度 正固吉祥",
        videoUrls: ["https://www.youtube.com/embed/bmbuBGNBTSU"],
        references: ["https://www.guoyi360.com/64gua64/xj/6047.html"],
      };
    case "未济六三":
      return {
        meaning: "事业未成 出兵征伐有凶险 但适宜跨越大江大河",
        videoUrls: ["https://www.youtube.com/embed/bmbuBGNBTSU"],
        references: ["https://www.guoyi360.com/64gua64/xj/6048.html"],
      };
    case "未济九四":
      return {
        meaning: "正固吉祥 忧悔消除 兴兵讨伐鬼方 三年获胜而获得大国的封赏",
        videoUrls: ["https://www.youtube.com/embed/bmbuBGNBTSU"],
        references: ["https://www.guoyi360.com/64gua64/xj/6049.html"],
      };
    case "未济六五":
      return {
        meaning: "正固吉祥 没有悔恨 君子的光辉在于诚实守信 吉祥",
        videoUrls: ["https://www.youtube.com/embed/bmbuBGNBTSU"],
        references: ["https://www.guoyi360.com/64gua64/xj/6050.html"],
      };
    case "未济上九":
      return {
        meaning: "心怀诚信 来喝酒 无灾祸 水沾湿了头颅 即使心怀诚信 也会失去",
        videoUrls: ["https://www.youtube.com/embed/bmbuBGNBTSU"],
        references: ["https://www.guoyi360.com/64gua64/xj/6051.html"],
      }; // @TODO
  }
}
