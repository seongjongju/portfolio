import zustandIcon from 'src/assets/icon/zustand.svg';
import coffeeOrderThum from 'src/assets/images/coffeeOrder-app-thum_0.png';
import cineAiThum from 'src/assets/images/cine-ai-thum_0.png';
import marryThum from 'src/assets/images/merry-template-thum_0.png';
import sermonThum from 'src/assets/images/sermon-thum_0.png';

//gnb
export const depths = [
    { id: "0", page: "about", text: "ABOUT" },
    { id: "1", page: "projects", text: "PROJECTS" },
    { id: "2", page: "contact", text: "CONTACT" },
];

//footer
export const footerLinks = [
    {id: "link_0", link: "https://github.com/seongjongju", text: "GITHUB"},
    {id: "link_1", link: "/download/test.txt", text: "DOWNLOAD RESUME"},
];

//StackIcon
export const stackIcons = [
    // 1. Core & Framework
    { id: "html", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/html5.svg", text: "HTML5" },
    { id: "css", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/css.svg", text: "CSS3" },
    { id: "js", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/javascript.svg", text: "JavaScript" },
    { id: "ts", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/typescript.svg", text: "TypeScript" },
    { id: "react", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/react.svg", text: "React" },
    { id: "next", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nextdotjs.svg", text: "Next.js" },
    { id: "vite", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/vite.svg", text: "Vite" },

    // 2. State & Data Fetching
    { id: "query", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/reactquery.svg", text: "React Query" },
    { id: "redux", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/redux.svg", text: "Redux Toolkit" },
    { id: "zustand", src: zustandIcon, text: "Zustand" },

    // 3. Styling
    { id: "tailwind", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/tailwindcss.svg", text: "Tailwind CSS" },

    // 4. Backend & DB & Cloud Storage
    { id: "supabase", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/supabase.svg", text: "Supabase" },
    { id: "cloudinary", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cloudinary.svg", text: "Cloudinary" },
    { id: "mongodb", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/mongodb.svg", text: "MongoDB" },

    // 5. Deployment & Tools
    { id: "cloudflare", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cloudflare.svg", text: "Cloudflare" },
    { id: "vercel", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/vercel.svg", text: "Vercel" },
    { id: "git", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/git.svg", text: "Git" },
    { id: "figma", src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/figma.svg", text: "Figma" },
];

//Certifications
export const certifications = [
    {id: "cer_0", date: "2021.01.29", text: "컴퓨터활용능력 1급"},
    {id: "cer_1", date: "2022.01.14", text: "GTQ 그래픽기술자격 1급"},
];

//project
export const projectDatas = [
    {
        id: "project_0",
        title: "커피 주문 웹앱",
        projectName: "coffee-order",
        img: coffeeOrderThum,
        ex: "나이스페이먼츠 연동 커피 주문 웹앱",
        list: ["Personal", "Front-end 100%", "Back-end 100%", "UI/UX 100%"],
        badges: ["Next.js", "TypeScript", "Redux ToolKit", "Mongo DB", "JWT", "Nicepay"],
        texts: [
            "인증 & 권한 관리: JWT 기반 사용자 인증(Auth) 로직 및 보안 세션 구현",
            "Redux Toolkit 및 Redux Persist를 활용한 유저 상태 관리 및 로컬스토리지 동기화",
            "Next.js API Routes와 MongoDB를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "Nicepay 결제 연동 및 웹훅(Webhook) 처리 로직 구현"
        ],
        view: "",
        link: "cine-ai-murex.vercel.app",
        git: "https://github.com/seongjongju/CoffeeOrder-app"
    },
    {
        id: "project_1",
        title: "CineAI",
        projectName: "CineAI",
        img: cineAiThum,
        ex: "제미나이 API 연동 OTT웹 서비스",
        list: ["Personal", "Front-end 100%", "Back-end 100%"],
        badges: ["Next.js", "TypeScript", "Zustand", "Supabase", "Oauth", "GEMINI API"],
        texts: [
            "카카오, 구글 Supabase Oauth 구현",
            "Zustand를 활용한 오늘 본 영화 리스트 상태 관리",
            "Next.js API Routes와 Supabase를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "GEMINI API 연동을 통해 동적 QnA 구축"
        ],
        view: "",
        link: "https://cine-ai-murex.vercel.app",
        git: "https://github.com/seongjongju/cine_ai"
    },
    {
        id: "project_2",
        title: "모바일 청첩장 템플릿",
        projectName: "Marry-template",
        img: marryThum,
        ex: "나이스페이먼츠 연동 커피 주문 웹앱",
        list: ["Personal", "Front-end 100%", "Back-end 100%", "UI/UX 100%"],
        badges: ["Next.js", "TypeScript", "Redux ToolKit", "Mongo DB", "JWT", "Nicepay"],
        texts: [
            "인증 & 권한 관리: JWT 기반 사용자 인증(Auth) 로직 및 보안 세션 구현",
            "Redux Toolkit 및 Redux Persist를 활용한 유저 상태 관리 및 로컬스토리지 동기화",
            "Next.js API Routes와 MongoDB를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "Nicepay 결제 연동 및 웹훅(Webhook) 처리 로직 구현"
        ],
        view: "",
        link: "https://marry-template.pages.dev/",
        git: "https://github.com/seongjongju/marry_template"
    },
    {
        id: "project_3",
        title: "잔소리 피하기 게임",
        projectName: "sermon_avoid_game",
        img: sermonThum,
        ex: "나이스페이먼츠 연동 커피 주문 웹앱",
        list: ["Personal", "Front-end 100%", "Back-end 100%", "UI/UX 100%"],
        badges: ["Next.js", "TypeScript", "Redux ToolKit", "Mongo DB", "JWT", "Nicepay"],
        texts: [
            "인증 & 권한 관리: JWT 기반 사용자 인증(Auth) 로직 및 보안 세션 구현",
            "Redux Toolkit 및 Redux Persist를 활용한 유저 상태 관리 및 로컬스토리지 동기화",
            "Next.js API Routes와 MongoDB를 연동하여 효율적인 데이터 CRUD REST API 구축",
            "Nicepay 결제 연동 및 웹훅(Webhook) 처리 로직 구현"
        ],
        view: "",
        link: "https://sermon-avoid-game.vercel.app",
        git: "https://github.com/seongjongju/sermon_avoid_game"
    },
];