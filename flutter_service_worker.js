'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d6b1dd035471b3968610490396612335",
"assets/AssetManifest.bin.json": "66f9f5ff6b834fc934c29ffccf494bbc",
"assets/AssetManifest.json": "a9ade8cbd66d5c677f6bbc2e3cd43fab",
"assets/assets/basic/1t1.png": "834d3da17d180a87de9bba203bcfaa17",
"assets/assets/basic/1t2.png": "4a365abae44c2923e6277907b9467599",
"assets/assets/basic/1t3.png": "2f93d41ed11700fff6bd9fe19786e969",
"assets/assets/basic/about1.png": "4a06da89e2cf93797332a17a127d5e05",
"assets/assets/basic/answer.png": "6f38bd0737df5323a3eda228e8cb10b6",
"assets/assets/basic/comments.png": "7ef16de60703fe0a538a60985bb77087",
"assets/assets/basic/f35.png": "5265d1e75abd292afe040eab077f79c1",
"assets/assets/basic/f36.png": "26df585b7abe0e15d586eb245c5fa85b",
"assets/assets/basic/f37.png": "0c168b5336679b73c0157b584efae4cd",
"assets/assets/basic/f41.png": "26f28ad46509b2ef677df452f40c31f8",
"assets/assets/basic/f47.png": "5a81de7594ee4fd04e3ecda5910e7e3b",
"assets/assets/basic/f52.png": "cd378a211b51e809dfc6d35678b88596",
"assets/assets/basic/f60.png": "a0539ce7272ac0c115fffc93201a097f",
"assets/assets/basic/f64.png": "5aa0ed4387c84dd0d3dd5eeab2834f32",
"assets/assets/basic/instaicon.png": "dbcbd4801093931e989664e78cdf7553",
"assets/assets/basic/intro1.png": "4ab0fcd1762b17007cdcc9c284d1714e",
"assets/assets/basic/kssicon.png": "5b5b2322cdbf403e660043ea095b8940",
"assets/assets/basic/launchericon.png": "705e2a6dc7e2930aa05e31affacbb8ba",
"assets/assets/basic/loading.png": "f9f8041353198f77b880c7adb6654620",
"assets/assets/basic/logo1.png": "a244e06977601bfc8ba46f7e423fd4e0",
"assets/assets/basic/lp1.png": "c6a3dff9d87d2c03061fcc454ffcd74b",
"assets/assets/basic/lp2.png": "53f1b9a36e337e7e83731c5dc625186f",
"assets/assets/basic/lp21.png": "bcbbacc66207aa204d02a8eefcd73a3e",
"assets/assets/basic/lp22.png": "2a6de0e7881ecf29361bfd5bf7ce2b6f",
"assets/assets/basic/lp23.png": "34173427ab72b13a83e03e0583e7cce1",
"assets/assets/basic/lp24.png": "b4d4edcee8badb4d3fff924003be9d2a",
"assets/assets/basic/lp25.png": "d1e3c0c47f0827cc8dc187273a40c2cb",
"assets/assets/basic/lp26.png": "0dddb10b7db22903d5383a47d73a1ba5",
"assets/assets/basic/lp27.png": "3c57ae125089cada9f401d84b2239e93",
"assets/assets/basic/lp28.png": "4b3bfb9108214ba1c47178ca5c8cb695",
"assets/assets/basic/lp3.png": "edcc4c8c13de6b275f4058773ad4898b",
"assets/assets/basic/lp4.png": "0a3574b821b289395bfeb60652907e68",
"assets/assets/basic/lp5.png": "7a27da154866f74daddd8cae26c38ad2",
"assets/assets/basic/lp6.png": "aaf571e09d4c55bfadf8e8d50f3d6d6f",
"assets/assets/basic/lp7.png": "67051860ef5f9edc5aad5b39ff08355f",
"assets/assets/basic/lp8.png": "b078fe73dcb22d5cfa2bf58f3b9e4db1",
"assets/assets/basic/lunchericon.png": "0e6eb35f8bdcf95f68122519e6be1122",
"assets/assets/basic/rate1.png": "7b18df88e3b3b3f6a9e845274946bf16",
"assets/assets/basic/rate2.png": "525f1cae842a2f6b541ab0c605782446",
"assets/assets/basic/rp1.png": "f6cf0aee1bd3a23302e3f538084c22c0",
"assets/assets/basic/rp2.png": "26cf74a85778adca9d8e556b32d0cce4",
"assets/assets/basic/rp21.png": "53daf2337c3e1fc64ccb61c437a72944",
"assets/assets/basic/rp22.png": "a55cd23f0ac5c1432c6b1ac911497fe7",
"assets/assets/basic/rp23.png": "dc16dea2d1fc176a9918fd9fbf8d8fcc",
"assets/assets/basic/rp24.png": "de626d7a47c83460af71c6b9f57c67b2",
"assets/assets/basic/rp25.png": "727caf041fe22ac13ddae7e8df2189c4",
"assets/assets/basic/rp26.png": "6a79155cebb96ed20689ba871896a7f3",
"assets/assets/basic/rp27.png": "097928f96303d4f9a0ac5b746adae070",
"assets/assets/basic/rp28.png": "4205a99b49f096283251eeae31723804",
"assets/assets/basic/rp29.png": "f8518e2393418724a7448ddd92c6e08b",
"assets/assets/basic/rp3.png": "f9c3da823d0ab3d886cd065961f48551",
"assets/assets/basic/rp4.png": "b19315f722e773760870e86fad3b71fc",
"assets/assets/basic/rp5.png": "15ceaf04a0b0e597d6fa679e232957a0",
"assets/assets/basic/rp6.png": "81ffc8e9b99abc17be93d670bf14696d",
"assets/assets/basic/rp7.png": "7041ab537add6b58eec6a9f696b6a770",
"assets/assets/basic/rp8.png": "c7f42e6eeb1920e55171af77b87f968e",
"assets/assets/basic/rp9.png": "4c255d24f586654af58b2eeff984c3d3",
"assets/assets/basic/sigicon.png": "5583f6c8d06f60d6dff5bdd3fc0a8d50",
"assets/assets/basic/sol1.png": "1d5c969fa0acbaa8ed9d50c82ff7b0d4",
"assets/assets/basic/sol_arb.png": "88cce3c0766e0e6498bbcff7a2952111",
"assets/assets/basic/sol_chn.png": "20a5e03931fcc7362aa52d8ed743f2df",
"assets/assets/basic/sol_eng.png": "944c7012efe4b3cb7c1f73f72ca9adf3",
"assets/assets/basic/sol_jpn.png": "7b633bcca84736dade4ee5e35133dbe8",
"assets/assets/basic/sol_kor.png": "ae0ff895bbe610be48e6464ae7993a46",
"assets/assets/basic/sol_vtn.png": "ce8a1a11ec14bc0c9a981cfc22dfc07f",
"assets/assets/basic/t235.png": "1b486f5638f690dce92b8f646b40b70a",
"assets/assets/basic/t236.png": "ff5174d195dbdf2abe12797be4b2a947",
"assets/assets/basic/t237.png": "99ccd12ac7691fedf0a01bc7eebbbcc8",
"assets/assets/basic/t241.png": "27f511debcf7b9176795fb7b7a453f1b",
"assets/assets/basic/t247.png": "4ada749c1ece180817806fd6fae8f093",
"assets/assets/basic/t252.png": "089cf8c4b7ac11e3a7e0b739bcfce420",
"assets/assets/basic/t260.png": "309e91bd8471033e9afc4d2bc3301429",
"assets/assets/basic/t264.png": "33a94637293ae2c419782413d9f33314",
"assets/assets/basic/t35.png": "4f7f55fa6a96942b92e318aa33ef815c",
"assets/assets/basic/t36.png": "a9b820ac8055492a642b1bdf3cb08913",
"assets/assets/basic/t37.png": "b7c8451e91f723880e95fa673fb232ec",
"assets/assets/basic/t41.png": "eb05f042a574eb73d23e2e62dde799d4",
"assets/assets/basic/t47.png": "a76ca6fe029095fd541ce4cb3084fb21",
"assets/assets/basic/t52.png": "bce28908673650c8ed9d5eaf7c7929b3",
"assets/assets/basic/t60.png": "88ee7b4ca030fabc024b863c52128efa",
"assets/assets/basic/t64.png": "51053005b7e95e3bc9fa45b2acdf92fc",
"assets/assets/basic/ticonmainslid1.png": "f6a01fbb904e7898d458a04c06185f1f",
"assets/assets/basic/ticonmainslid2.png": "73b9f9bf0192109a5d0a1d00aa0d055a",
"assets/assets/basic/title.png": "065e26de294043f54537ff57a7a324d1",
"assets/assets/basic/title1.png": "1a93868e8ec0a245ba5ae488cf65c193",
"assets/assets/basic/titlel.png": "d793dad6d4f7a020cc5445c560de0445",
"assets/assets/basic/titlelite.png": "4344f278a0b090e579c8af4ddefdb946",
"assets/assets/basic/titler.png": "4c3ab101f618b4dfe38005508d233f36",
"assets/assets/basic/titlew.png": "7a4ff3617a022e99115375f8d04e3a4d",
"assets/assets/basic/tlp11.png": "5d63ef760fa32f0e79c3d301d662d02b",
"assets/assets/basic/tlp12.png": "74fc0779cc71a5fcf9035ab2813426fb",
"assets/assets/basic/tlp13.png": "59379ed4fff8403782fb2ae43c34fb05",
"assets/assets/basic/tlp14.png": "b931dfbc7979688ecb688e929ed5e5de",
"assets/assets/basic/tlp15.png": "cdb8c14a2eb6395314d8ec2aa3bf028a",
"assets/assets/basic/tlp16.png": "703bcbac25263fbc79b0597149cb636c",
"assets/assets/basic/tlp17.png": "c29808d9153ddb302f693199681f81b4",
"assets/assets/basic/tlp18.png": "e58cfb0af56f032439ed1b4f80b36437",
"assets/assets/basic/tlp21.png": "c04854c14f8a8cacb36c305eb7a8922d",
"assets/assets/basic/tlp22.png": "e69dda0b8ec3d99e8b2ee9f4fcc30539",
"assets/assets/basic/tlp23.png": "5da1c60aa2ce009caa4c9e8d1e1b1fd6",
"assets/assets/basic/tlp24.png": "b1e2d8af7d98065d12d8a0ed056fd811",
"assets/assets/basic/tlp25.png": "9c1ed68c8d36269d2577a2c32b42680c",
"assets/assets/basic/tlp26.png": "cdc58c57f3c959dd706c5f7fb38fffc3",
"assets/assets/basic/tlp27.png": "0a6088225ce72c6278f66c7dfb3b7d12",
"assets/assets/basic/tlp28.png": "6f94342daea639cd1c238fd3b9446ef0",
"assets/assets/basic/topik.png": "f13ed261cfc6889f999db73484386611",
"assets/assets/basic/trp11.png": "f0f02448662cdec0946808515d013f46",
"assets/assets/basic/trp12.png": "fd66c6baee1ae9ff4bef506afdc5ddb1",
"assets/assets/basic/trp13.png": "34d43017d86c1a853dbc55872594aea9",
"assets/assets/basic/trp14.png": "cfc9f0c4abe94eaead7790b5db8070d3",
"assets/assets/basic/trp15.png": "51829921c4d427709dc7590f08473676",
"assets/assets/basic/trp16.png": "ede7f37a48e0effea40680dbb6116f13",
"assets/assets/basic/trp17.png": "e3076373533dd4788260589663c005aa",
"assets/assets/basic/trp18.png": "be629829a32c8143b106c266c2aae018",
"assets/assets/basic/trp19.png": "653d678e04e00cf5f620c4a14dda5686",
"assets/assets/basic/trp21.png": "0286cf9b8e26516a0d39cdbd6356634d",
"assets/assets/basic/trp22.png": "c3bf17d096b9446154d13c93cacc4bca",
"assets/assets/basic/trp23.png": "4ffa845768c5dd3c42b14f63279f888b",
"assets/assets/basic/trp24.png": "082091a923a45ececf97108767fb41de",
"assets/assets/basic/trp25.png": "a2a2edb6662f674d9fe3e85d9935a32a",
"assets/assets/basic/trp26.png": "eccbcc6c7e91cac32b73bf0f3e9acc86",
"assets/assets/basic/trp27.png": "3cb998add0a5b40ee8fa98c7cf628012",
"assets/assets/basic/trp28.png": "134ebff91e544660709a05cb5c59f3b9",
"assets/assets/basic/trp29.png": "1afd68b55fbcfb5b24bbec43d076dacb",
"assets/assets/basic/twp11.png": "e60f32e55ff3d2fa9ae65eff90f96d67",
"assets/assets/basic/twp12.png": "f1c433eb865fc580c100f73abd002046",
"assets/assets/basic/twp13.png": "3c984fa2feb8f552277a196e9c533259",
"assets/assets/basic/twp21.png": "04781bb6c1f5a1ef94f9664a85e0f227",
"assets/assets/basic/twp22.png": "088c625556da8df9eedad25584b24a58",
"assets/assets/basic/twp23.png": "aef87a762a5024341ed87f996aa17c42",
"assets/assets/basic/type1.png": "0239c923aa0ebc0489d7044d3cd8dc4e",
"assets/assets/basic/type2.png": "977d1770e1e51399ed423d46a913776f",
"assets/assets/basic/type3.png": "92832f1b7cbc0059985b7de7ad645486",
"assets/assets/basic/watermark.png": "0cbee1ba6f4e820734f1d7f56bdde835",
"assets/assets/basic/wp1.png": "907feb1a19ed5ea23b061c7871bedafc",
"assets/assets/basic/wp2.png": "84e2656f21e5a26b67d0dcfbc253fb85",
"assets/assets/basic/wp21.png": "be874bc4b824c4e39d0d8c277e45c61d",
"assets/assets/basic/wp22.png": "2d12507c6d0c97fe3ca0e5203f8878d5",
"assets/assets/basic/wp23.png": "67f85e7365061e6a85fca464b609262e",
"assets/assets/basic/wp3.png": "e98ebe511747eb1da51b52b080cce6c9",
"assets/assets/images/3501.png": "5f11eb6b995b08a1f8d8978adc7ef6b8",
"assets/assets/images/3502.png": "ac73574e5cfa6c16a74fc9648a9ec49e",
"assets/assets/images/3503.png": "50a069ecca09dd4a355a4b7d7b3d4cd5",
"assets/assets/images/3505.png": "e72c26b52c72602f4eda0b8ef8d758f3",
"assets/assets/images/3506.png": "6cc63d759da6a112d3957689dabf77ea",
"assets/assets/images/3507.png": "196ebaa98732c405b780ed938a2c65a5",
"assets/assets/images/3508.png": "9c3b29026f004af182c74af6c35485be",
"assets/assets/images/3509.png": "a21d166e0f60cd7f511beee4ce57e244",
"assets/assets/images/3510.png": "5c5f714dc7e453e2be8f1eaa8f07866e",
"assets/assets/images/3515.png": "ead87209651250b1362a435e98119d58",
"assets/assets/images/3516.png": "1947631e0e29fed6f379edd0d08f0885",
"assets/assets/images/3540.png": "e75023b9735cca3b13c83529397bc782",
"assets/assets/images/3541.png": "97e3ff1285327e0ccd3de479dfc168d4",
"assets/assets/images/3542.png": "bffbf611a081c10d21d11c2c4d96fd25",
"assets/assets/images/3551.png": "31f883638dc7fb5de8bce33cd3176883",
"assets/assets/images/3552.png": "61cf7086a20d4ef0a84854f0a5ea8d70",
"assets/assets/images/3553.png": "c3e5370b345dbaa7705bec2173092669",
"assets/assets/images/3554.png": "3f9f2f3c4a24182450f68f4235a3831d",
"assets/assets/images/356364.png": "64e460667f152cc46023e8d175e2d342",
"assets/assets/images/3601.png": "ad48e93d5cbcdd1f8391795e37eaba1c",
"assets/assets/images/3602.png": "b889f413db6e277ca1dc45a93de2b785",
"assets/assets/images/3603.png": "0c3264dda7dbb91ad576746396f9f65f",
"assets/assets/images/3605.png": "e3a2729e1f81296b6fb6d445c763abf7",
"assets/assets/images/3606.png": "598d6577bc360ded4bf189748154ed19",
"assets/assets/images/3607.png": "806d8de1fec2e1ff1e7820815bd8d4eb",
"assets/assets/images/3608.png": "3b8f28fcf8deecf651b2aa5eb72348ac",
"assets/assets/images/3609.png": "b16ea4a38904cb05a47d76e4498ef71c",
"assets/assets/images/3610.png": "a984149dc303cce1e14f07a07a8b453a",
"assets/assets/images/3615.png": "98103beb18cfbec3ee7347a76176b90b",
"assets/assets/images/3616.png": "ff7321d1e5cf4bea57d8f48e0bc36ffa",
"assets/assets/images/3640.png": "d632e8a4599ada1b4d6b6d8e9ea86401",
"assets/assets/images/3641.png": "c17a46af5cdccac4f84975fc33c2526e",
"assets/assets/images/3642.png": "4f55bf4341051152ae9e229d14c81cad",
"assets/assets/images/3651.png": "0e150bbce3a1db29bd42083a2596fcfd",
"assets/assets/images/3652.png": "4294b1afa6edf0800fa9e7e7a99a4444",
"assets/assets/images/3653.png": "13736a66c21a4c2091872a4b6b2b2efc",
"assets/assets/images/3654.png": "7d78e1268ca03a2732f41fa2f8520216",
"assets/assets/images/366364.png": "5419eb4b98f8afa87db4ca1f0760805a",
"assets/assets/images/3701.png": "edbe581fc29eee4e45b261e6fb483bc0",
"assets/assets/images/3702.png": "7c082298f6312766eac930408b066f40",
"assets/assets/images/3703.png": "84b7e17e6d341291af043ac55638e4b6",
"assets/assets/images/3705.png": "ccd1cb30f15dd23745c950adade621b2",
"assets/assets/images/3706.png": "d696918796e2b6665b3e626d6e56ea8d",
"assets/assets/images/3707.png": "1d045674a66d9ce238c32316e2693a3d",
"assets/assets/images/3708.png": "5bffeb64330e5e3e46255bd441332d08",
"assets/assets/images/3709.png": "6903bc4bad3a206a6fbcc293201de4f0",
"assets/assets/images/3710.png": "2decba4722a8c01b59465e4069cbdc97",
"assets/assets/images/3715.png": "722b4c7131a478be31aa367ddf263e66",
"assets/assets/images/3716.png": "699beac68086c73fe660f1412f254c22",
"assets/assets/images/3740.png": "5369f10d90103288677c7ef80ec8b710",
"assets/assets/images/3741.png": "e3807cfc901a9ebff6d877af37f1f815",
"assets/assets/images/3742.png": "2fd937a9271127cc07d125a82ac7c5a4",
"assets/assets/images/3751.png": "4cb9534de250cd919f24ad29534235a7",
"assets/assets/images/3752.png": "c337fa6f95b50fb4b1be868526edbb93",
"assets/assets/images/3753.png": "483d080c544eaa382f13d6474d69a700",
"assets/assets/images/3754.png": "c402b306d42849ca7e063794b6b5c71a",
"assets/assets/images/376364.png": "974ab03001d4aaa246cbcdc26c1e4f27",
"assets/assets/images/4101.png": "d2249c6e6c1d676f8da595fa04a86edb",
"assets/assets/images/4102.png": "f0144a8355a23329c214cfa68bb7278a",
"assets/assets/images/4103.png": "e5cd7356b134ea26de3b85308a9f1435",
"assets/assets/images/4105.png": "120759d5ee88f7bed583d38904722f21",
"assets/assets/images/4106.png": "53ddb9c5c01a64a0e1c2c22ee69e7c2b",
"assets/assets/images/4107.png": "0249bb2a174cc9c58f303b303a2e1a91",
"assets/assets/images/4108.png": "de48eaff02e7a9b91cd8741299630339",
"assets/assets/images/4109.png": "7ccc2ab8a50ef4cc0b4ab97cb8afae02",
"assets/assets/images/4110.png": "2db045704c721365473dac58b4d855f4",
"assets/assets/images/4115.png": "ab51f10dbfd77ab6169dd27a028da1e0",
"assets/assets/images/4116.png": "5a4d70eaa44ddfde728d65acabd635e1",
"assets/assets/images/4140.png": "9ecd6fe28ef5cc0edaa45dc1447abc54",
"assets/assets/images/4141.png": "bf1c2bee580c7fb05c9f30bd94462865",
"assets/assets/images/4142.png": "0d4e93e44a03fb0c403251a2778fe464",
"assets/assets/images/4151.png": "3bf5db232bf26d59daad3b1bbd0b83e8",
"assets/assets/images/4152.png": "d5a729976e0c2ce8ba1f9fe9b4365884",
"assets/assets/images/4153.png": "a893818d1119ed0824a57c81487db60f",
"assets/assets/images/4154.png": "85fcd190004128ad44f07e4f33dcffbd",
"assets/assets/images/416364.png": "12636945538aab00fe39a25e4f4a8672",
"assets/assets/images/4701.png": "e0a5f0734da4562893d3f296a6ab3942",
"assets/assets/images/4702.png": "5efd2cff97a73d955650eb62b682fd9e",
"assets/assets/images/4703.png": "7a570f5ff378bae700755caaafe0ba74",
"assets/assets/images/4705.png": "757cf9ac8ca9a2399d6f85ee9c2027af",
"assets/assets/images/4706.png": "56ba0ece7725ef72eda51b020292415d",
"assets/assets/images/4707.png": "65dcc6152eda72a0185b6a09bbd87d69",
"assets/assets/images/4708.png": "842299d632660dce1d0a31fceb83223e",
"assets/assets/images/4709.png": "486692501a027f9e50142eec0b7696ee",
"assets/assets/images/4710.png": "2684463dc483fe9a6a146ac0497d386b",
"assets/assets/images/4715.png": "129d34fd3fa6970d36d79dbf1488d438",
"assets/assets/images/4716.png": "ce2716ed8e68715a875a9f50cd3e8406",
"assets/assets/images/4740.png": "286f85c304e0623f8d3201fc7eb705c2",
"assets/assets/images/4741.png": "0246d00f3c349860f73347291ba6b2d9",
"assets/assets/images/4742.png": "77175918006c63c7e0d77dcc9e220c92",
"assets/assets/images/4751.png": "426e65269d98f7276eddba389b0aa5f9",
"assets/assets/images/4752.png": "f2ba599a8f6daa46d44c75cfdcbcc022",
"assets/assets/images/4753.png": "1396f84ca0856bfae5c963e302bd5e66",
"assets/assets/images/4754.png": "3aa4ac89af647557ff3e7ed9bcfffc91",
"assets/assets/images/476364.png": "25f2265cbfad4d7e31eeb45ce2f60695",
"assets/assets/images/5201.png": "90dccc207211bac78e2fbe2b0d72f38d",
"assets/assets/images/5202.png": "37161e68c1cdd6a33310d954b5523448",
"assets/assets/images/5203.png": "553a1a97767ef740a86e2d46b65ea59e",
"assets/assets/images/5205.png": "bd8428c6e080e5430786827a47981216",
"assets/assets/images/5206.png": "08db2638317a6de4af4579ce5f81f80b",
"assets/assets/images/5207.png": "240d619f9f5fa4200a130044b444d4e2",
"assets/assets/images/5208.png": "f067eb3acd91c746ab66952ff2cc9707",
"assets/assets/images/5209.png": "8d31f74be1cdfd4e4473f7cd608054c2",
"assets/assets/images/5210.png": "14ace50c5bbb48393e7bc55554c232de",
"assets/assets/images/5215.png": "6955a4d9ebfe42c8727d483c626a0cef",
"assets/assets/images/5216.png": "179e8a20c6d2d5981363ac4880abc1e4",
"assets/assets/images/5240.png": "35753fe662fcfe3ab8c23abf84504407",
"assets/assets/images/5241.png": "5daaff626a8325c65fa22e3fce87330e",
"assets/assets/images/5242.png": "c077b3b0e58fd90b574b6268bc3400e0",
"assets/assets/images/5251.png": "a334ba3d722af90fad8d96b80962c969",
"assets/assets/images/5252.png": "1c2072c1be51d5d82b1d6ae59d69df0d",
"assets/assets/images/5253.png": "e5f40ba5f4fc588b08b69de2a91c2af1",
"assets/assets/images/5254.png": "0ff3d6d2abf48564b936d4c342174897",
"assets/assets/images/526364.png": "33749dae247c66b6afd6f2ad96c053d6",
"assets/assets/images/6001.png": "1ef5bb97a670e10369fa8467d81187d5",
"assets/assets/images/6002.png": "6ab7fb6d4c61e3d64feeeac8217a6dbf",
"assets/assets/images/6003.png": "f71a34f1b997ca3e0b96a0d22b56b975",
"assets/assets/images/6005.png": "d8c90c5b6fecaeb9dc3ba8046d96fda1",
"assets/assets/images/6006.png": "075e5a0805f232eb935bb7d261964bc2",
"assets/assets/images/6007.png": "8da1ca775a729970911a7341f91c7ba6",
"assets/assets/images/6008.png": "d0eaea3d3a6a937beac2faa7ebe0b156",
"assets/assets/images/6009.png": "77cc6edb6430dce96c6c0ea562b128fb",
"assets/assets/images/6010.png": "2a589cf906f7b957cdc142252812fdbd",
"assets/assets/images/6015.png": "82d8304d9940d7606561284a13f27a45",
"assets/assets/images/6016.png": "5804bc9d55f7cdccf6c7c27c2daf5e25",
"assets/assets/images/6040.png": "1a769cf133bafcc7e6eb3add0405cd1c",
"assets/assets/images/6041.png": "fb49a298a2bb855b171d7d94e9df8ec4",
"assets/assets/images/6042.png": "211092d61f1f39ab74b563a39bda967c",
"assets/assets/images/6051.png": "a88387939976854bcb01c23d837b0b72",
"assets/assets/images/6052.png": "a6ea4aa3291b933b77ad2a6dace69780",
"assets/assets/images/6053.png": "d7f250bb372558aaa466978fa421baf9",
"assets/assets/images/6054.png": "b970c6e232786148cb9bd2be79f13cd3",
"assets/assets/images/606364.png": "46717ebe65ec5a4367d5233527048675",
"assets/assets/images/6401.png": "fd8a63d5ff6d5394b44f76f1d8296775",
"assets/assets/images/6402.png": "15feb6d921f2b2fd3a6d65c7426e2bc2",
"assets/assets/images/6403.png": "eb527fff3b69ce2e7682dbda83aa4408",
"assets/assets/images/6405.png": "332eaf7f438b848de0981714cc65eb34",
"assets/assets/images/6406.png": "75f4338eb3523f07b6a5d7164d380a35",
"assets/assets/images/6407.png": "84290264196a88cc002788f60623924c",
"assets/assets/images/6408.png": "d07a3376b3231e58cf652f5a1bca5f46",
"assets/assets/images/6409.png": "80ad6eb14c39c10063de97b9d8100e20",
"assets/assets/images/6410.png": "4fa5608e84d22a1d4f8ff393660e4ad5",
"assets/assets/images/6415.png": "a02d90e2faeae88b32ac7f4e564efb2a",
"assets/assets/images/6416.png": "2330d962225c794426329c1e9aab15de",
"assets/assets/images/6440.png": "6e59797ede83952f3f70175545abadaa",
"assets/assets/images/6441.png": "623d74d8904fa4177ae66bbbee35dd05",
"assets/assets/images/6442.png": "7b5099e0e4666f17ac424bf20bfcad56",
"assets/assets/images/6451.png": "b1c18bd68a2f7445547be1735c520479",
"assets/assets/images/6452.png": "55958ef363ed0d0671535699592d7a65",
"assets/assets/images/6453.png": "6efbe9cf9376fba3dc714c142baac4e4",
"assets/assets/images/6454.png": "adac82bba3138acf44c0b5f112d6b608",
"assets/assets/images/646364.png": "60dd4cb5634efa4c375e2b74345d6e4c",
"assets/assets/logindata.json": "7ab5d7d23633e4a967849b0a97dea8b4",
"assets/assets/translations/ar.json": "d779de9687a6552cfeae29d11ea6e1ba",
"assets/assets/translations/en.json": "6b1d3629a6cb210180fa816dcaad5c48",
"assets/assets/translations/ja.json": "0421931b3dd6aba175ce80222d476059",
"assets/assets/translations/ko.json": "762d7c6abbd2c2c05007f561c280e14d",
"assets/assets/translations/vi.json": "6b1d3629a6cb210180fa816dcaad5c48",
"assets/assets/translations/zh.json": "857260b944dbe118f375a6799cdba08e",
"assets/FontManifest.json": "726d6eb3f3789ad1d946c030038d2af8",
"assets/fonts/MaterialIcons-Regular.otf": "bd893a9c7f6bfcc568fc4e37f31d3d8f",
"assets/NOTICES": "225558a64d2dc419c0fac9d051ebdaa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/outline_material_icons/lib/outline_material_icons.ttf": "6b94994fffd9868330d830fcb18a6026",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b421eb8e09ebc57d3d21dc1cd5cb344d",
"/": "b421eb8e09ebc57d3d21dc1cd5cb344d",
"main.dart.js": "dff963b7f575b0cb04380ba0de2f85c2",
"manifest.json": "25aec25e353b2cd3ee7b110722961610",
"version.json": "030c62037e915c0c5da9293964805661"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
