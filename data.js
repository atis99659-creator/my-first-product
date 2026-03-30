// Data Store for World Culture Guide
export const cultures = {
    korea: {
        en: { name: "South Korea", greeting: "Annyeonghaseyo", food: "Kimchi, Bulgogi", clothing: "Hanbok", description: "A country with 5,000 years of history, blending ancient tradition with cutting-edge technology." },
        ko: { name: "대한민국", greeting: "안녕하세요", food: "김치, 불고기", clothing: "한복", description: "반만년의 역사를 가진 나라로, 고대 전통과 첨단 기술이 조화롭게 공존하는 곳입니다." },
        emoji: "🇰🇷", color: "#3498db", code: "kr",
        regions: [
            { 
                en: "Seoul", ko: "서울",
                themes: {
                    restaurant: [
                        { name: "명동교자 (명동)", url: "https://www.google.com/maps/search/명동교자+명동" },
                        { name: "우래옥 (을지로)", url: "https://www.google.com/maps/search/우래옥+을지로" },
                        { name: "금돼지식당 (약수)", url: "https://www.google.com/maps/search/금돼지식당+약수" },
                        { name: "몽탄 (삼각지)", url: "https://www.google.com/maps/search/몽탄+삼각지" },
                        { name: "안덕 (서촌)", url: "https://www.google.com/maps/search/안덕+서촌" },
                        { name: "3대삼계장인 (서초)", url: "https://www.google.com/maps/search/3대삼계장인+서초" },
                        { name: "진진 (망원)", url: "https://www.google.com/maps/search/진진+망원" },
                        { name: "쮸즈 (가로수길)", url: "https://www.google.com/maps/search/쮸즈+가로수길" },
                        { name: "밍글스 (강남)", url: "https://www.google.com/maps/search/밍글스+강남" },
                        { name: "모수서울 (용산)", url: "https://www.google.com/maps/search/모수서울+용산" }
                    ],
                    cafe: [
                        { name: "카페어니언 (안국)", url: "https://www.google.com/maps/search/카페어니언+안국" },
                        { name: "누데이크 (성수)", url: "https://www.google.com/maps/search/누데이크+성수" },
                        { name: "잼잼 (연남)", url: "https://www.google.com/maps/search/잼잼+연남" },
                        { name: "관훈갤러리카페 (인사동)", url: "https://www.google.com/maps/search/관훈갤러리카페+인사동" },
                        { name: "5to7 (성수)", url: "https://www.google.com/maps/search/5to7+성수" },
                        { name: "구욱희씨 (서울숲)", url: "https://www.google.com/maps/search/구욱희씨+서울숲" },
                        { name: "런던베이글뮤지엄 (안국)", url: "https://www.google.com/maps/search/런던베이글뮤지엄+안국" },
                        { name: "아우프글렛 (금호)", url: "https://www.google.com/maps/search/아우프글렛+금호" },
                        { name: "텅 (창덕궁)", url: "https://www.google.com/maps/search/텅+창덕궁" },
                        { name: "매일카페 (연남)", url: "https://www.google.com/maps/search/매일카페+연남" }
                    ],
                    landmark: [
                        { name: "경복궁 (종로)", url: "https://www.google.com/maps/search/경복궁" },
                        { name: "N서울타워 (남산)", url: "https://www.google.com/maps/search/N서울타워" },
                        { name: "성수동카페거리 (성수)", url: "https://www.google.com/maps/search/성수동카페거리" },
                        { name: "롯데월드타워 (잠실)", url: "https://www.google.com/maps/search/롯데월드타워" },
                        { name: "북촌한옥마을 (가회동)", url: "https://www.google.com/maps/search/북촌한옥마을" },
                        { name: "별마당도서관 (코엑스)", url: "https://www.google.com/maps/search/별마당도서관" },
                        { name: "청계천 (광화문)", url: "https://www.google.com/maps/search/청계천" },
                        { name: "익선동 (종로)", url: "https://www.google.com/maps/search/익선동" },
                        { name: "DDP (동대문)", url: "https://www.google.com/maps/search/DDP" },
                        { name: "홍대거리 (마포)", url: "https://www.google.com/maps/search/홍대거리" }
                    ],
                    activity: [
                        { name: "한강피크닉 (여의도)", url: "https://www.google.com/maps/search/여의도한강공원" },
                        { name: "한복체험 (경복궁)", url: "https://www.google.com/maps/search/경복궁+한복체험" },
                        { name: "롯데월드 (잠실)", url: "https://www.google.com/maps/search/롯데월드" },
                        { name: "퍼스널컬러진단 (명동)", url: "https://www.google.com/maps/search/명동+퍼스널컬러진단" },
                        { name: "난타공연 (명동)", url: "https://www.google.com/maps/search/명동난타극장" },
                        { name: "향수공방 (성수)", url: "https://www.google.com/maps/search/성수동+향수공방" },
                        { name: "DMZ투어 (임진각)", url: "https://www.google.com/maps/search/임진각+DMZ투어" },
                        { name: "재즈바 (종로)", url: "https://www.google.com/maps/search/종로+재즈바" },
                        { name: "실탄사격 (명동)", url: "https://www.google.com/maps/search/명동+실탄사격" },
                        { name: "리얼월드 (성수)", url: "https://www.google.com/maps/search/리얼월드+성수" }
                    ]
                }
            },
            { 
                en: "Gyeonggi-do", ko: "경기도",
                themes: {
                    restaurant: [
                        { name: "가보정 (수원)", url: "https://www.google.com/maps/search/가보정+수원" },
                        { name: "을밀대 (일산)", url: "https://www.google.com/maps/search/을밀대+일산" },
                        { name: "기와집순두부 (남양주)", url: "https://www.google.com/maps/search/기와집순두부+남양주" },
                        { name: "서오릉신호등장작구이 (고양)", url: "https://www.google.com/maps/search/서오릉신호등장작구이" },
                        { name: "장수촌 (의왕)", url: "https://www.google.com/maps/search/장수촌+의왕" },
                        { name: "옥천냉면 (양평)", url: "https://www.google.com/maps/search/옥천냉면+양평" },
                        { name: "춘궁동보리밥 (하남)", url: "https://www.google.com/maps/search/춘궁동보리밥" },
                        { name: "고기리막국수 (용인)", url: "https://www.google.com/maps/search/고기리막국수" },
                        { name: "신당동즉석떡볶이 (구리)", url: "https://www.google.com/maps/search/신당동즉석떡볶이+구리" },
                        { name: "쌈밥전문정가네 (광주)", url: "https://www.google.com/maps/search/쌈밥전문정가네+광주" }
                    ],
                    cafe: [
                        { name: "더티트렁크 (파주)", url: "https://www.google.com/maps/search/더티트렁크+파주" },
                        { name: "묵리459 (용인)", url: "https://www.google.com/maps/search/묵리459" },
                        { name: "폴콘 (양주)", url: "https://www.google.com/maps/search/폴콘+양주" },
                        { name: "포레스트아웃팅스 (고양)", url: "https://www.google.com/maps/search/포레스트아웃팅스+고양" },
                        { name: "카페아를 (의정부)", url: "https://www.google.com/maps/search/카페아를" },
                        { name: "대부도카페DBB (안산)", url: "https://www.google.com/maps/search/대부도카페DBB" },
                        { name: "나인블럭 (광주)", url: "https://www.google.com/maps/search/나인블럭+광주" },
                        { name: "옐로커피 (일산)", url: "https://www.google.com/maps/search/옐로커피" },
                        { name: "베이커리씨어터 (남양주)", url: "https://www.google.com/maps/search/베이커리씨어터" },
                        { name: "테라로사 (양평)", url: "https://www.google.com/maps/search/테라로사+양평" }
                    ],
                    landmark: [
                        { name: "수원화성 (수원)", url: "https://www.google.com/maps/search/수원화성" },
                        { name: "에버랜드 (용인)", url: "https://www.google.com/maps/search/에버랜드" },
                        { name: "임진각평화누리 (파주)", url: "https://www.google.com/maps/search/임진각평화누리" },
                        { name: "아침고요수목원 (가평)", url: "https://www.google.com/maps/search/아침고요수목원" },
                        { name: "한국민속촌 (용인)", url: "https://www.google.com/maps/search/한국민속촌" },
                        { name: "두물머리 (양평)", url: "https://www.google.com/maps/search/두물머리" },
                        { name: "광명동굴 (광명)", url: "https://www.google.com/maps/search/광명동굴" },
                        { name: "행주산성 (고양)", url: "https://www.google.com/maps/search/행주산성" },
                        { name: "남한산성 (광주)", url: "https://www.google.com/maps/search/남한산성" },
                        { name: "대부도 (안산)", url: "https://www.google.com/maps/search/대부도" }
                    ],
                    activity: [
                        { name: "루지체험 (가평)", url: "https://www.google.com/maps/search/가평+루지체험" },
                        { name: "스타필드아쿠아필드 (하남)", url: "https://www.google.com/maps/search/스타필드아쿠아필드+하남" },
                        { name: "짚라인 (용인)", url: "https://www.google.com/maps/search/용인+짚라인" },
                        { name: "요트체험 (화성)", url: "https://www.google.com/maps/search/화성+요트체험" },
                        { name: "쁘띠프랑스 (가평)", url: "https://www.google.com/maps/search/쁘띠프랑스" },
                        { name: "헤이리예술마을 (파주)", url: "https://www.google.com/maps/search/헤이리예술마을" },
                        { name: "웅진플레이도시 (부천)", url: "https://www.google.com/maps/search/웅진플레이도시" },
                        { name: "캠핑&글램핑 (가평)", url: "https://www.google.com/maps/search/가평+글램핑" },
                        { name: "레일바이크 (의왕)", url: "https://www.google.com/maps/search/의왕+레일바이크" },
                        { name: "패러글라이딩 (양평)", url: "https://www.google.com/maps/search/양평+패러글라이딩" }
                    ]
                }
            },
            { 
                en: "Gangwon-do", ko: "강원도",
                themes: {
                    restaurant: [
                        { name: "엄지네포장마차 (강릉)", url: "https://www.google.com/maps/search/엄지네포장마차+강릉" },
                        { name: "봉포머구리집 (속초)", url: "https://www.google.com/maps/search/봉포머구리집+속초" },
                        { name: "동화가든 (강릉)", url: "https://www.google.com/maps/search/동화가든+강릉" },
                        { name: "만석닭강정 (속초)", url: "https://www.google.com/maps/search/만석닭강정+속초" },
                        { name: "실비식당 (태백)", url: "https://www.google.com/maps/search/실비식당+태백" },
                        { name: "고분옥할머니순두부 (강릉)", url: "https://www.google.com/maps/search/고분옥할머니순두부+강릉" },
                        { name: "백촌막국수 (고성)", url: "https://www.google.com/maps/search/백촌막국수+고성" },
                        { name: "산북막국수 (고성)", url: "https://www.google.com/maps/search/산북막국수+고성" },
                        { name: "다래한우 (평창)", url: "https://www.google.com/maps/search/다래한우+평창" },
                        { name: "단양면옥 (양양)", url: "https://www.google.com/maps/search/단양면옥+양양" }
                    ],
                    cafe: [
                        { name: "테라로사커피공장 (강릉)", url: "https://www.google.com/maps/search/테라로사커피공장+강릉" },
                        { name: "툇마루 (강릉)", url: "https://www.google.com/maps/search/툇마루+강릉" },
                        { name: "바다정원 (고성)", url: "https://www.google.com/maps/search/바다정원+고성" },
                        { name: "카페코랄로바이조선 (양양)", url: "https://www.google.com/maps/search/카페코랄로바이조선+양양" },
                        { name: "칠성조선소 (속초)", url: "https://www.google.com/maps/search/칠성조선소+속초" },
                        { name: "글라스하우스 (고성)", url: "https://www.google.com/maps/search/글라스하우스+고성" },
                        { name: "보사노바 (강릉)", url: "https://www.google.com/maps/search/보사노바+강릉" },
                        { name: "앤드커피랩 (속초)", url: "https://www.google.com/maps/search/앤드커피랩+속초" },
                        { name: "하이와나 (양양)", url: "https://www.google.com/maps/search/하이와나+양양" },
                        { name: "로미지안가든 (정선)", url: "https://www.google.com/maps/search/로미지안가든+정선" }
                    ],
                    landmark: [
                        { name: "낙산사 (양양)", url: "https://www.google.com/maps/search/낙산사" },
                        { name: "남이섬 (춘천)", url: "https://www.google.com/maps/search/남이섬" },
                        { name: "대관령양떼목장 (평창)", url: "https://www.google.com/maps/search/대관령양떼목장" },
                        { name: "설악산국립공원 (속초)", url: "https://www.google.com/maps/search/설악산국립공원" },
                        { name: "정동진역 (강릉)", url: "https://www.google.com/maps/search/정동진역" },
                        { name: "안목해변 (강릉)", url: "https://www.google.com/maps/search/안목해변" },
                        { name: "휴휴암 (양양)", url: "https://www.google.com/maps/search/휴휴암" },
                        { name: "오죽헌 (강릉)", url: "https://www.google.com/maps/search/오죽헌" },
                        { name: "소양강스카이워크 (춘천)", url: "https://www.google.com/maps/search/소양강스카이워크" },
                        { name: "와이키키비치 (강릉)", url: "https://www.google.com/maps/search/와이키키비치+강릉" }
                    ],
                    activity: [
                        { name: "서피비치서핑 (양양)", url: "https://www.google.com/maps/search/서피비치+서핑" },
                        { name: "삼척해상케이블카 (삼척)", url: "https://www.google.com/maps/search/삼척해상케이블카" },
                        { name: "강촌레일바이크 (춘천)", url: "https://www.google.com/maps/search/강촌레일바이크" },
                        { name: "정선레일바이크 (정선)", url: "https://www.google.com/maps/search/정선레일바이크" },
                        { name: "대관령눈썰매 (평창)", url: "https://www.google.com/maps/search/대관령눈썰매" },
                        { name: "용평리조트스키 (평창)", url: "https://www.google.com/maps/search/용평리조트" },
                        { name: "하이원워터월드 (정선)", url: "https://www.google.com/maps/search/하이원워터월드" },
                        { name: "패러글라이딩 (평창)", url: "https://www.google.com/maps/search/평창+패러글라이딩" },
                        { name: "윈드서핑 (강릉)", url: "https://www.google.com/maps/search/강릉+윈드서핑" },
                        { name: "아바이마을갯배 (속초)", url: "https://www.google.com/maps/search/아바이마을+갯배" }
                    ]
                }
            },
            { 
                en: "Chungcheong-do", ko: "충청도",
                themes: {
                    restaurant: [
                        { name: "성심당 (대전)", url: "https://www.google.com/maps/search/대전+성심당" },
                        { name: "진로집 (대전)", url: "https://www.google.com/maps/search/대전+진로집" },
                        { name: "오씨칼국수 (대전)", url: "https://www.google.com/maps/search/대전+오씨칼국수" },
                        { name: "김화칼국수 (대전)", url: "https://www.google.com/maps/search/대전+김화칼국수" },
                        { name: "정림식당 (공주)", url: "https://www.google.com/maps/search/공주+정림식당" },
                        { name: "명암저수지장수촌 (청주)", url: "https://www.google.com/maps/search/청주+명암저수지+장수촌" },
                        { name: "대복한우 (음성)", url: "https://www.google.com/maps/search/음성+대복한우" },
                        { name: "원흥식당 (단양)", url: "https://www.google.com/maps/search/단양+원흥식당" },
                        { name: "대흥식당 (예산)", url: "https://www.google.com/maps/search/예산+대흥식당" },
                        { name: "서해식당 (태안)", url: "https://www.google.com/maps/search/태안+서해식당" }
                    ],
                    cafe: [
                        { name: "풍세커피 (천안)", url: "https://www.google.com/maps/search/천안+풍세커피" },
                        { name: "공다방 (공주)", url: "https://www.google.com/maps/search/공주+공다방" },
                        { name: "리트리빈 (청주)", url: "https://www.google.com/maps/search/청주+리트리빈" },
                        { name: "카페산 (단양)", url: "https://www.google.com/maps/search/단양+카페산" },
                        { name: "온더선셋 (태안)", url: "https://www.google.com/maps/search/태안+온더선셋" },
                        { name: "엔학고레 (공주)", url: "https://www.google.com/maps/search/공주+엔학고레" },
                        { name: "핀스커피 (천안)", url: "https://www.google.com/maps/search/천안+핀스커피" },
                        { name: "커피인터뷰 (대전)", url: "https://www.google.com/maps/search/대전+커피인터뷰" },
                        { name: "카페이오 (청주)", url: "https://www.google.com/maps/search/청주+카페이오" },
                        { name: "외암민속마을카페 (아산)", url: "https://www.google.com/maps/search/아산+외암민속마을+카페" }
                    ],
                    landmark: [
                        { name: "공산성 (공주)", url: "https://www.google.com/maps/search/공주+공산성" },
                        { name: "무령왕릉 (공주)", url: "https://www.google.com/maps/search/공주+무령왕릉" },
                        { name: "독립기념관 (천안)", url: "https://www.google.com/maps/search/천안+독립기념관" },
                        { name: "대동하늘공원 (대전)", url: "https://www.google.com/maps/search/대전+대동하늘공원" },
                        { name: "도담삼봉 (단양)", url: "https://www.google.com/maps/search/단양+도담삼봉" },
                        { name: "만천하스카이워크 (단양)", url: "https://www.google.com/maps/search/단양+만천하스카이워크" },
                        { name: "꽃지해수욕장 (태안)", url: "https://www.google.com/maps/search/태안+꽃지해수욕장" },
                        { name: "외암민속마을 (아산)", url: "https://www.google.com/maps/search/아산+외암민속마을" },
                        { name: "법주사 (보은)", url: "https://www.google.com/maps/search/보은+법주사" },
                        { name: "청남대 (청주)", url: "https://www.google.com/maps/search/청주+청남대" }
                    ],
                    activity: [
                        { name: "단양패러글라이딩 (단양)", url: "https://www.google.com/maps/search/단양+패러글라이딩" },
                        { name: "수안보온천 (충주)", url: "https://www.google.com/maps/search/충주+수안보온천" },
                        { name: "파라다이스스파도고 (아산)", url: "https://www.google.com/maps/search/아산+파라다이스스파도고" },
                        { name: "단양강잔도길 (단양)", url: "https://www.google.com/maps/search/단양강잔도길" },
                        { name: "삽교호놀이동산 (당진)", url: "https://www.google.com/maps/search/당진+삽교호놀이동산" },
                        { name: "예당호출렁다리 (예산)", url: "https://www.google.com/maps/search/예산+예당호출렁다리" },
                        { name: "청풍호반케이블카 (제천)", url: "https://www.google.com/maps/search/제천+청풍호반케이블카" },
                        { name: "대천해수욕장짚라인 (보령)", url: "https://www.google.com/maps/search/보령+대천해수욕장+짚라인" },
                        { name: "오월드 (대전)", url: "https://www.google.com/maps/search/대전+오월드" },
                        { name: "청주랜드 (청주)", url: "https://www.google.com/maps/search/청주랜드" }
                    ]
                }
            },
            { 
                en: "Jeolla-do", ko: "전라도",
                themes: {
                    restaurant: [
                        { name: "가족회관 (전주)", url: "https://www.google.com/maps/search/전주+가족회관" },
                        { name: "한국집 (전주)", url: "https://www.google.com/maps/search/전주+한국집" },
                        { name: "진미식당 (익산)", url: "https://www.google.com/maps/search/익산+진미식당" },
                        { name: "하얀집 (나주)", url: "https://www.google.com/maps/search/나주+하얀집" },
                        { name: "덕인관 (담양)", url: "https://www.google.com/maps/search/담양+덕인관" },
                        { name: "천일식당 (해남)", url: "https://www.google.com/maps/search/해남+천일식당" },
                        { name: "원조떡갈비 (담양)", url: "https://www.google.com/maps/search/담양+원조떡갈비" },
                        { name: "벽오동 (순천)", url: "https://www.google.com/maps/search/순천+벽오동" },
                        { name: "오동도정식 (여수)", url: "https://www.google.com/maps/search/여수+오동도정식" },
                        { name: "청진동해장국 (군산)", url: "https://www.google.com/maps/search/군산+청진동해장국" }
                    ],
                    cafe: [
                        { name: "카페드몽드 (담양)", url: "https://www.google.com/maps/search/담양+카페드몽드" },
                        { name: "외할머니솜씨 (전주)", url: "https://www.google.com/maps/search/전주+외할머니솜씨" },
                        { name: "카페전망 (전주)", url: "https://www.google.com/maps/search/전주+카페전망" },
                        { name: "여수낭만카페 (여수)", url: "https://www.google.com/maps/search/여수+낭만카페" },
                        { name: "모사금 (여수)", url: "https://www.google.com/maps/search/여수+모사금" },
                        { name: "브리크 (완주)", url: "https://www.google.com/maps/search/완주+브리크" },
                        { name: "소소담 (담양)", url: "https://www.google.com/maps/search/담양+소소담" },
                        { name: "두베카페 (완주)", url: "https://www.google.com/maps/search/완주+두베카페" },
                        { name: "모현동커피 (익산)", url: "https://www.google.com/maps/search/익산+모현동커피" },
                        { name: "로맨틱오동도 (여수)", url: "https://www.google.com/maps/search/여수+로맨틱오동도" }
                    ],
                    landmark: [
                        { name: "전주한옥마을 (전주)", url: "https://www.google.com/maps/search/전주한옥마을" },
                        { name: "순천만습지 (순천)", url: "https://www.google.com/maps/search/순천만습지" },
                        { name: "여수밤바다 (여수)", url: "https://www.google.com/maps/search/여수+종포해양공원" },
                        { name: "죽녹원 (담양)", url: "https://www.google.com/maps/search/죽녹원" },
                        { name: "보성녹차밭 (보성)", url: "https://www.google.com/maps/search/보성녹차밭" },
                        { name: "목포근대역사관 (목포)", url: "https://www.google.com/maps/search/목포근대역사관" },
                        { name: "경암동철길마을 (군산)", url: "https://www.google.com/maps/search/경암동철길마을" },
                        { name: "내장산국립공원 (정읍)", url: "https://www.google.com/maps/search/내장산국립공원" },
                        { name: "선운사 (고창)", url: "https://www.google.com/maps/search/선운사" },
                        { name: "향일암 (여수)", url: "https://www.google.com/maps/search/향일암" }
                    ],
                    activity: [
                        { name: "여수해상케이블카 (여수)", url: "https://www.google.com/maps/search/여수해상케이블카" },
                        { name: "목포해상케이블카 (목포)", url: "https://www.google.com/maps/search/목포해상케이블카" },
                        { name: "전주레일바이크 (전주)", url: "https://www.google.com/maps/search/전주레일바이크" },
                        { name: "정남진편백숲우드랜드 (장흥)", url: "https://www.google.com/maps/search/정남진편백숲우드랜드" },
                        { name: "곡성기차마을 (곡성)", url: "https://www.google.com/maps/search/곡성섬진강기차마을" },
                        { name: "고창갯벌체험 (고창)", url: "https://www.google.com/maps/search/고창갯벌체험" },
                        { name: "순천만국가정원 (순천)", url: "https://www.google.com/maps/search/순천만국가정원" },
                        { name: "변산반도트레킹 (부안)", url: "https://www.google.com/maps/search/변산반도국립공원" },
                        { name: "해상분수쇼 (목포)", url: "https://www.google.com/maps/search/목포춤추는바다분수" },
                        { name: "지리산둘레길 (남원)", url: "https://www.google.com/maps/search/지리산둘레길" }
                    ]
                }
            },
            { 
                en: "Gyeongsang-do", ko: "경상도",
                themes: {
                    restaurant: [
                        { name: "이재모피자 (부산)", url: "https://www.google.com/maps/search/부산+이재모피자" },
                        { name: "거대갈비 (부산)", url: "https://www.google.com/maps/search/부산+거대갈비" },
                        { name: "동인동찜갈비 (대구)", url: "https://www.google.com/maps/search/대구+동인동찜갈비" },
                        { name: "중앙떡볶이 (대구)", url: "https://www.google.com/maps/search/대구+중앙떡볶이" },
                        { name: "함양집 (경주)", url: "https://www.google.com/maps/search/경주+함양집" },
                        { name: "황남옥수수 (경주)", url: "https://www.google.com/maps/search/경주+황남옥수수" },
                        { name: "통영오미사꿀빵 (통영)", url: "https://www.google.com/maps/search/통영+오미사꿀빵" },
                        { name: "진주하연옥 (진주)", url: "https://www.google.com/maps/search/진주+하연옥" },
                        { name: "안동현대찜닭 (안동)", url: "https://www.google.com/maps/search/안동+현대찜닭" },
                        { name: "포항환여횟집 (포항)", url: "https://www.google.com/maps/search/포항+환여횟집" }
                    ],
                    cafe: [
                        { name: "웨이브온커피 (부산)", url: "https://www.google.com/maps/search/부산+웨이브온커피" },
                        { name: "피아크 (부산)", url: "https://www.google.com/maps/search/부산+피아크" },
                        { name: "룰리커피 (대구)", url: "https://www.google.com/maps/search/대구+룰리커피" },
                        { name: "카페능 (경주)", url: "https://www.google.com/maps/search/경주+카페능" },
                        { name: "황남아데나 (경주)", url: "https://www.google.com/maps/search/경주+황남아데나" },
                        { name: "미스티크 (통영)", url: "https://www.google.com/maps/search/통영+미스티크" },
                        { name: "카페오픈더도어 (울산)", url: "https://www.google.com/maps/search/울산+카페오픈더도어" },
                        { name: "맘모스베이커리 (안동)", url: "https://www.google.com/maps/search/안동+맘모스베이커리" },
                        { name: "러블리초코 (거제)", url: "https://www.google.com/maps/search/거제+러블리초코" },
                        { name: "빌라드웨이브 (기장)", url: "https://www.google.com/maps/search/기장+빌라드웨이브" }
                    ],
                    landmark: [
                        { name: "해운대엘시티 (부산)", url: "https://www.google.com/maps/search/부산+해운대엘시티" },
                        { name: "감천문화마을 (부산)", url: "https://www.google.com/maps/search/부산+감천문화마을" },
                        { name: "황리단길 (경주)", url: "https://www.google.com/maps/search/경주+황리단길" },
                        { name: "불국사 (경주)", url: "https://www.google.com/maps/search/경주+불국사" },
                        { name: "수성못 (대구)", url: "https://www.google.com/maps/search/대구+수성못" },
                        { name: "김광석다시그리기길 (대구)", url: "https://www.google.com/maps/search/대구+김광석다시그리기길" },
                        { name: "동궁과월지 (경주)", url: "https://www.google.com/maps/search/경주+동궁과월지" },
                        { name: "장생포고래문화마을 (울산)", url: "https://www.google.com/maps/search/울산+장생포고래문화마을" },
                        { name: "죽도시장 (포항)", url: "https://www.google.com/maps/search/포항+죽도시장" },
                        { name: "호미곶 (포항)", url: "https://www.google.com/maps/search/포항+호미곶" }
                    ],
                    activity: [
                        { name: "해운대블루라인파크 (부산)", url: "https://www.google.com/maps/search/부산+해운대블루라인파크" },
                        { name: "롯데월드어드벤처부산 (부산)", url: "https://www.google.com/maps/search/부산+롯데월드어드벤처" },
                        { name: "스카이라인루지 (통영)", url: "https://www.google.com/maps/search/통영+스카이라인루지" },
                        { name: "이월드 (대구)", url: "https://www.google.com/maps/search/대구+이월드" },
                        { name: "경주엑스포대공원 (경주)", url: "https://www.google.com/maps/search/경주+엑스포대공원" },
                        { name: "포항스페이스워크 (포항)", url: "https://www.google.com/maps/search/포항+스페이스워크" },
                        { name: "사천바다케이블카 (사천)", url: "https://www.google.com/maps/search/사천+바다케이블카" },
                        { name: "거제씨월드 (거제)", url: "https://www.google.com/maps/search/거제+씨월드" },
                        { name: "울산대교전망대 (울산)", url: "https://www.google.com/maps/search/울산+울산대교전망대" },
                        { name: "가야테마파크 (김해)", url: "https://www.google.com/maps/search/김해+가야테마파크" }
                    ]
                }
            },
            { 
                en: "Jeju-do", ko: "제주도",
                themes: {
                    restaurant: [
                        { name: "연돈 (서귀포)", url: "https://www.google.com/maps/search/서귀포+연돈" },
                        { name: "숙성도 (노형)", url: "https://www.google.com/maps/search/제주+숙성도" },
                        { name: "자매국수 (제주)", url: "https://www.google.com/maps/search/제주+자매국수" },
                        { name: "오는정김밥 (서귀포)", url: "https://www.google.com/maps/search/서귀포+오는정김밥" },
                        { name: "우진해장국 (제주)", url: "https://www.google.com/maps/search/제주+우진해장국" },
                        { name: "명진전복 (구좌)", url: "https://www.google.com/maps/search/구좌+명진전복" },
                        { name: "춘심이네 (서귀포)", url: "https://www.google.com/maps/search/서귀포+춘심이네" },
                        { name: "가시식당 (표선)", url: "https://www.google.com/maps/search/표선+가시식당" },
                        { name: "늘봄흑돼지 (제주)", url: "https://www.google.com/maps/search/제주+늘봄흑돼지" },
                        { name: "맛나식당 (성산)", url: "https://www.google.com/maps/search/성산+맛나식당" }
                    ],
                    cafe: [
                        { name: "더클리프 (중문)", url: "https://www.google.com/maps/search/중문+더클리프" },
                        { name: "아베베베이커리 (제주)", url: "https://www.google.com/maps/search/제주+아베베베이커리" },
                        { name: "테라로사 (서귀포)", url: "https://www.google.com/maps/search/서귀포+테라로사" },
                        { name: "오설록티뮤지엄 (안덕)", url: "https://www.google.com/maps/search/오설록티뮤지엄" },
                        { name: "카페노티드 (애월)", url: "https://www.google.com/maps/search/애월+카페노티드" },
                        { name: "원앤온리 (안덕)", url: "https://www.google.com/maps/search/안덕+원앤온리" },
                        { name: "앤트러사이트 (한림)", url: "https://www.google.com/maps/search/한림+앤트러사이트" },
                        { name: "델문도 (함덕)", url: "https://www.google.com/maps/search/함덕+델문도" },
                        { name: "카페진정성 (종달)", url: "https://www.google.com/maps/search/종달+카페진정성" },
                        { name: "인스밀 (대정)", url: "https://www.google.com/maps/search/대정+인스밀" }
                    ],
                    landmark: [
                        { name: "성산일출봉 (성산)", url: "https://www.google.com/maps/search/성산일출봉" },
                        { name: "협재해수욕장 (한림)", url: "https://www.google.com/maps/search/협재해수욕장" },
                        { name: "카멜리아힐 (안덕)", url: "https://www.google.com/maps/search/카멜리아힐" },
                        { name: "섭지코지 (성산)", url: "https://www.google.com/maps/search/섭지코지" },
                        { name: "비자림 (구좌)", url: "https://www.google.com/maps/search/비자림" },
                        { name: "정방폭포 (서귀포)", url: "https://www.google.com/maps/search/정방폭포" },
                        { name: "용머리해안 (안덕)", url: "https://www.google.com/maps/search/용머리해안" },
                        { name: "한라산국립공원 (제주)", url: "https://www.google.com/maps/search/한라산국립공원" },
                        { name: "성읍민속마을 (표선)", url: "https://www.google.com/maps/search/성읍민속마을" },
                        { name: "함덕해수욕장 (조천)", url: "https://www.google.com/maps/search/함덕해수욕장" }
                    ],
                    activity: [
                        { name: "9.81파크루지 (애월)", url: "https://www.google.com/maps/search/9.81파크" },
                        { name: "아쿠아플라넷 (성산)", url: "https://www.google.com/maps/search/아쿠아플라넷+제주" },
                        { name: "신화월드 (안덕)", url: "https://www.google.com/maps/search/제주신화월드" },
                        { name: "빛의벙커 (성산)", url: "https://www.google.com/maps/search/빛의벙커" },
                        { name: "스누피가든 (구좌)", url: "https://www.google.com/maps/search/스누피가든" },
                        { name: "요트투어 (중문)", url: "https://www.google.com/maps/search/제주+요트투어" },
                        { name: "서핑체험 (중문/월정)", url: "https://www.google.com/maps/search/제주+서핑체험" },
                        { name: "우도전기차투어 (우도)", url: "https://www.google.com/maps/search/우도+전기차" },
                        { name: "한라산등반 (제주)", url: "https://www.google.com/maps/search/한라산" },
                        { name: "감귤따기체험 (서귀포)", url: "https://www.google.com/maps/search/제주+감귤따기체험" }
                    ]
                }
            }
        ]
    },
    france: {
        en: { name: "France", greeting: "Bonjour", food: "Croissant, Escargot", clothing: "Breton shirt", description: "Western Europe's largest country, famous for the Eiffel Tower and art." },
        ko: { name: "프랑스", greeting: "봉쥬르", food: "크로와상, 에스카르고", clothing: "브르통 셔츠", description: "서유럽에서 가장 큰 나라로, 에펠탑과 예술로 유명합니다." },
        emoji: "🇫🇷", color: "#002395", code: "fr",
        regions: [
            { en: "Île-de-France", ko: "일드프랑스" },
            { en: "Auvergne-Rhône-Alpes", ko: "오베르뉴-론-알프" },
            { en: "Provence-Alpes-Côte d'Azur", ko: "프로방스-알프-코트다쥐르" },
            { en: "Nouvelle-Aquitaine", ko: "누벨 아키텐" },
            { en: "Occitanie", ko: "옥시타니" },
            { en: "Grand Est", ko: "그랑 데스트" },
            { en: "Hauts-de-France", ko: "오드프랑스" },
            { en: "Normandie", ko: "노르망디" },
            { en: "Bretagne", ko: "브르타뉴" },
            { en: "Pays de la Loire", ko: "페이드라루아르" },
            { en: "Centre-Val de Loire", ko: "상트르발드루아르" },
            { en: "Bourgogne-Franche-Comté", ko: "부르고뉴-프랑슈-콩테" },
            { en: "Corse", ko: "코르스" }
        ]
    },
    japan: {
        en: { name: "Japan", greeting: "Konnichiwa", food: "Sushi, Ramen", clothing: "Kimono", description: "An island nation where deep-rooted traditions meet futuristic urban landscapes." },
        ko: { name: "일본", greeting: "곤니찌와", food: "초밥, 라멘", clothing: "기모노", description: "뿌리 깊은 전통과 미래지향적인 도시 풍경이 만나는 섬나라입니다." },
        emoji: "🇯🇵", color: "#9b59b6", code: "jp",
        regions: [
            { en: "Hokkaido", ko: "홋카이도" },
            { en: "Tohoku (Sendai)", ko: "도호쿠 (센다이)" },
            { en: "Kanto (Tokyo)", ko: "간토 (도쿄)" },
            { en: "Chubu (Nagoya)", ko: "주부 (나고야)" },
            { en: "Kansai (Osaka/Kyoto)", ko: "간사이 (오사카·교토)" },
            { en: "Chugoku (Hiroshima)", ko: "주고쿠 (히로시마)" },
            { en: "Shikoku", ko: "시코쿠" },
            { en: "Kyushu & Okinawa (Fukuoka)", ko: "규슈·오키나와 (후쿠오카)" }
        ]
    },
    china: {
        en: { name: "China", greeting: "Ni Hao", food: "Dim Sum, Peking Duck", clothing: "Qipao", description: "A huge nation with over 5,000 years of civilization." },
        ko: { name: "중국", greeting: "니하오", food: "딤섬, 베이징 덕", clothing: "치파오", description: "5,000년 이상의 문명을 가진 거대한 나라입니다." },
        emoji: "🇨🇳", color: "#e74c3c", code: "cn",
        regions: [
            { en: "North China (Huabei)", ko: "화베이 (북중국)" },
            { en: "East China (Huadong)", ko: "화둥 (동중국)" },
            { en: "South China (Huanan)", ko: "남중국)" },
            { en: "Central China (Huazhong)", ko: "화중 (중중국)" },
            { en: "Southwest China (Xinan)", ko: "시난 (서남중국)" },
            { en: "Northwest China (Xibei)", ko: "시베이 (서북중국)" }
        ]
    },
    usa: {
        en: { name: "USA", greeting: "Hello", food: "Hamburger, BBQ", clothing: "Jeans", description: "A vast country known for its cultural melting pot and technology." },
        ko: { name: "미국", greeting: "헬로", food: "햄버거, 바베큐", clothing: "청바지", description: "문화적 용광로와 기술로 유명한 광대한 나라입니다." },
        emoji: "🇺🇸", color: "#B22234", code: "us",
        regions: [
            { en: "Florida", ko: "플로리다" },
            { en: "New York", ko: "뉴욕" },
            { en: "California", ko: "캘리포니아" },
            { en: "Texas", ko: "텍사스" },
            { en: "Pennsylvania", ko: "펜실베이니아" },
            { en: "Georgia", ko: "조지아" },
            { en: "Tennessee", ko: "테네시" },
            { en: "Illinois", ko: "일리노이" },
            { en: "Nevada", ko: "네바다" },
            { en: "North Carolina", ko: "노스캐롤라이나" }
        ]
    },
    spain: {
        en: { name: "Spain", greeting: "Hola", food: "Paella, Tapas", clothing: "Flamenco dress", description: "Known for sunny beaches and unique architecture." },
        ko: { name: "스페인", greeting: "올라", food: "파에야, 타파스", clothing: "플라멩코 의상", description: "화창한 해변과 독특한 건축물로 유명합니다." },
        emoji: "🇪🇸", color: "#f1c40f", code: "es",
        regions: [
            { en: "Andalusia", ko: "안달루시아" },
            { name: "Catalonia", ko: "카탈루냐" },
            { en: "Madrid", ko: "마드리드" },
            { en: "Valencia", ko: "발렌시아" },
            { en: "Galicia", ko: "갈리시아" },
            { en: "Castile and León", ko: "카스티야이레온" },
            { en: "Castile-La Mancha", ko: "카스티야라만차" },
            { en: "Basque Country", ko: "바스크" },
            { en: "Aragon", ko: "아라곤" },
            { en: "Canary Islands", ko: "카나리아 제도" },
            { en: "Balearic Islands", ko: "발레아레스 제도" },
            { en: "Extremadura", ko: "에스트레마두라" },
            { en: "Asturias", ko: "아스투리아스" },
            { en: "Murcia", ko: "무르시아" },
            { en: "Navarre", ko: "나바라" },
            { en: "Cantabria", ko: "칸타브리아" },
            { en: "La Rioja", ko: "라리오하" }
        ]
    },
    italy: {
        en: { name: "Italy", greeting: "Ciao", food: "Pizza, Pasta", clothing: "High Fashion", description: "The birthplace of the Renaissance, rich in art and food." },
        ko: { name: "이탈리아", greeting: "챠오", food: "피자, 파스타", clothing: "하이 패션", description: "르네상스의 발상지로, 예술과 음식이 풍부한 나라입니다." },
        emoji: "🇮🇹", color: "#27ae60", code: "it",
        regions: [
            { en: "Lombardy", ko: "롬바르디아" },
            { en: "Veneto", ko: "베네토" },
            { en: "Piedmont", ko: "피에몬테" },
            { en: "Liguria", ko: "리구리아" },
            { en: "Emilia-Romagna", ko: "에밀리아-로마냐" },
            { en: "Trentino-Alto Adige", ko: "트렌티노-알토 아디제" },
            { en: "Friuli-Venezia Giulia", ko: "프리울리-베네치아 줄리아" },
            { en: "Aosta Valley", ko: "발레다오스타" },
            { en: "Tuscany", ko: "토스카나" },
            { en: "Lazio", ko: "라치오" },
            { en: "Umbria", ko: "움브리아" },
            { en: "Marche", ko: "마르케" },
            { en: "Campania", ko: "캄파니아" },
            { en: "Apulia", ko: "풀리아" },
            { en: "Sicily", ko: "시칠리아" },
            { en: "Sardinia", ko: "사르데냐" },
            { en: "Calabria", ko: "칼라브리아" },
            { en: "Basilicata", ko: "바실리카타" },
            { en: "Molise", ko: "몰리제" },
            { en: "Abruzzo", ko: "아브루초" }
        ]
    },
    turkey: {
        en: { name: "Turkey", greeting: "Merhaba", food: "Kebab, Baklava", clothing: "Kaftan", description: "A transcontinental country bridging Europe and Asia." },
        ko: { name: "튀르키예", greeting: "메르하바", food: "케밥, 바클라바", clothing: "카프탄", description: "유럽과 아시아를 잇는 대륙 횡단 국가입니다." },
        emoji: "🇹🇷", color: "#c0392b", code: "tr",
        regions: [
            { en: "Marmara", ko: "마르마라" },
            { en: "Aegean", ko: "에게해" },
            { en: "Mediterranean", ko: "지중해" },
            { en: "Central Anatolia", ko: "중앙 아나톨리아" },
            { en: "Black Sea", ko: "흑해" },
            { en: "Eastern Anatolia", ko: "동부 아나톨리아" },
            { en: "Southeastern Anatolia", ko: "동남부 아나톨리아" }
        ]
    },
    mexico: {
        en: { name: "Mexico", greeting: "Hola", food: "Tacos, Burritos", clothing: "Sombrero", description: "Famous for its ancient ruins and colorful festivals." },
        ko: { name: "멕시코", greeting: "올라", food: "타코, 부리또", clothing: "솜브레로", description: "고대 유적과 화려한 축제로 유명합니다." },
        emoji: "🇲🇽", color: "#16a085", code: "mx",
        regions: [
            { en: "North", ko: "북부" },
            { en: "Northwest", ko: "북서부" },
            { en: "West-Central", ko: "중서부" },
            { en: "Central", ko: "중부" },
            { en: "South and Southeast", ko: "남부 및 동남부" }
        ]
    },
    uk: {
        en: { name: "United Kingdom", greeting: "Hello", food: "Fish and Chips", clothing: "Kilts", description: "Comprising four nations with long historical influence." },
        ko: { name: "영국", greeting: "헬로", food: "피쉬 앤 칩스", clothing: "킬트", description: "네 개의 국가로 구성된 긴 역사를 가진 나라입니다." },
        emoji: "🇬🇧", color: "#2c3e50", code: "gb",
        regions: [
            { en: "England", ko: "잉글랜드" },
            { en: "Scotland", ko: "스코틀랜드" },
            { en: "Wales", ko: "웨일스" },
            { en: "Northern Ireland", ko: "북아일랜드" }
        ]
    },
    germany: {
        en: { name: "Germany", greeting: "Hallo", food: "Pretzel, Schnitzel", clothing: "Lederhosen", description: "Known for its engineering, beer, and historical cities." },
        ko: { name: "독일", greeting: "할로", food: "프레첼, 슈니첼", clothing: "레더호젠", description: "공학, 맥주, 그리고 역사적인 도시들로 유명합니다." },
        emoji: "🇩🇪", color: "#34495e", code: "de",
        regions: [
            { en: "Bavaria", ko: "바이에른" },
            { en: "North Rhine-Westphalia", ko: "노르트라인-베스트팔렌" },
            { en: "Baden-Württemberg", ko: "바덴-뷔르템베르크" },
            { en: "Hesse", ko: "헤센" },
            { en: "Lower Saxony", ko: "니더작센" },
            { en: "Saxony", ko: "작센" },
            { en: "Rhineland-Palatinate", ko: "라인란트-팔츠" },
            { en: "Schleswig-Holstein", ko: "슐레스비히-홀슈타인" },
            { en: "Brandenburg", ko: "브란덴부르크" },
            { en: "Mecklenburg-Vorpommern", ko: "메클렌부르크-포어포메른" },
            { en: "Thuringia", ko: "튀링겐" },
            { en: "Saxony-Anhalt", ko: "작센-안할트" },
            { en: "Saarland", ko: "자를란트" },
            { en: "Berlin", ko: "베를린" },
            { en: "Hamburg", ko: "함부르크" },
            { en: "Bremen", ko: "브레멘" }
        ]
    },
    greece: {
        en: { name: "Greece", greeting: "Yasas", food: "Moussaka, Gyros", clothing: "Chiton", description: "The cradle of Western civilization and beautiful islands." },
        ko: { name: "그리스", greeting: "야사스", food: "무사카, 기로스", clothing: "키톤", description: "서구 문명의 발상지와 아름다운 섬들로 유명합니다." },
        emoji: "🇬🇷", color: "#2980b9", code: "gr",
        regions: [
            { en: "Attica", ko: "아티키" },
            { en: "Central Macedonia", ko: "중앙 마케도니아" },
            { en: "Crete", ko: "크레타" },
            { en: "South Aegean", ko: "남에게" },
            { en: "North Aegean", ko: "북에게" },
            { en: "Ionian Islands", ko: "이오니아 제도" },
            { en: "Peloponnese", ko: "펠로폰네소스" },
            { en: "West Macedonia", ko: "서마케도니아" },
            { en: "East Macedonia and Thrace", ko: "동마케도니아-트라키아" },
            { en: "Epirus", ko: "에피루스" },
            { en: "Thessaly", ko: "테살리아" },
            { en: "Central Greece", ko: "중앙그리스" },
            { en: "West Greece", ko: "서그리스" }
        ]
    }
};

export const uiTranslations = {
    en: {
        pageTitle: "🌏 World Culture Guide",
        btnRegions: "🏘️ View Detailed Regions",
        modalHint: "Select a region to see its name",
        greeting: "Greeting", food: "Famous Food", clothing: "Clothing",
        footer: "© 2026 World Culture Guide. All rights reserved.",
        themeLight: "☀️ Light Mode", themeDark: "🌙 Dark Mode",
        themes: {
            restaurant: "🍴 Restaurants",
            cafe: "☕ Cafes",
            landmark: "🏰 Landmarks",
            activity: "⛷️ Activities"
        }
    },
    ko: {
        pageTitle: "🌏 세계 문화 가이드",
        btnRegions: "🏘️ 상세 지역 보기",
        modalHint: "지역을 선택하면 이름을 확인할 수 있습니다",
        greeting: "인사말", food: "대표 음식", clothing: "전통 의상",
        footer: "© 2026 세계 문화 가이드. 모든 권리 보유.",
        themeLight: "☀️ 라이트 모드", themeDark: "🌙 다크 모드",
        themes: {
            restaurant: "🍴 음식점",
            cafe: "☕ 카페",
            landmark: "🏰 명소",
            activity: "⛷️ 액티비티"
        }
    }
};
