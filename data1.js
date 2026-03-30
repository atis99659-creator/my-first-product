export const data1 = {
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
            { en: "Gyeonggi-do", ko: "경기도", themes: { restaurant: [], cafe: [], landmark: [], activity: [] } },
            { en: "Gangwon-do", ko: "강원도", themes: { restaurant: [], cafe: [], landmark: [], activity: [] } },
            { en: "Chungcheong-do", ko: "충청도", themes: { restaurant: [], cafe: [], landmark: [], activity: [] } },
            { en: "Jeolla-do", ko: "전라도", themes: { restaurant: [], cafe: [], landmark: [], activity: [] } },
            { en: "Gyeongsang-do", ko: "경상도", themes: { restaurant: [], cafe: [], landmark: [], activity: [] } },
            { en: "Jeju-do", ko: "제주도", themes: { restaurant: [], cafe: [], landmark: [], activity: [] } }
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
    }
};
