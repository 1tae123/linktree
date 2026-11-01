// 프로필과 링크 정보. 이 파일만 고치면 페이지 내용이 바뀝니다.

export type LinkItem = {
  id: string; // 클릭 수 집계에 쓰는 고유 키 (영문/숫자/-/_)
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string; // public/ 기준 경로 또는 외부 URL
  links: LinkItem[];
};

export const profile: Profile = {
  name: "최원태",
  bio: "AI 매드 사이언티스트가 되고픈 직딩",
  image: "/profile.jpg",
  links: [
    { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "blog", title: "블로그", url: "https://velog.io/" },
  ],
};
