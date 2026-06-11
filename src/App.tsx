const GITHUB = 'https://github.com/dddz223'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          Woojin Oh
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <p className="hero-eyebrow fade-in fade-in-1">
          Full-stack Developer · AI Game Software
        </p>
        <h1 className="hero-name fade-in fade-in-2">
          혼자지만,
          <br />
          <em>혼자가 아닌 방식</em>으로
          <br />
          일합니다.
        </h1>
        <p className="hero-tagline fade-in fade-in-3">
          AI를 동료처럼 활용해 기획부터 배포까지 혼자 끝내는 풀스택
          개발자 오우진입니다. 지금 이 순간에도 제가 만든 서비스가 실제
          사용자를 만나고 있습니다.
        </p>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-body">
          <p>
            명지전문대학 AI게임소프트웨어과에서 공부하며, 지난 6개월간
            트레이딩 카드 P2P 거래 PWA <strong>POCA</strong>를 혼자
            개발해 실제 서비스로 출시를 앞두고 있습니다.
          </p>
          <p>
            혼자 일하지만 혼자 일하지 않습니다. AI 에이전트에게 영향 범위
            분석, DB 마이그레이션, UI 구현 같은 역할을 나눠 맡기고, 저는
            설계와 의사결정, 최종 검수에 집중합니다. 이 협업 방식으로 DB
            설계부터 프론트엔드, 배포, 운영까지 전 과정을 직접
            책임집니다.
          </p>
          <p>
            "RLS 정책 한 줄이 없으면 silent fail이 난다" 같은 교훈을
            문서가 아니라 실제 서비스에서 배웠습니다. 빠르게 만들고,
            깨지면 원인을 끝까지 추적하고, 배운 것을 기록합니다.
          </p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Vite', 'PWA'],
    },
    {
      title: 'Backend & DB',
      items: ['Supabase', 'PostgreSQL · RLS', 'Realtime', 'Auth'],
    },
    {
      title: 'Deploy & Ops',
      items: ['Vercel', 'GitHub Pages', 'CI 자동 배포'],
    },
    {
      title: 'Workflow',
      items: ['Claude Code · Agent Team', 'Git 커밋 단위 관리', '모바일 우선 검수'],
    },
  ]
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <article className="project">
          <div className="project-head">
            <h3 className="project-name">POCA</h3>
            <span className="live-badge">
              <span className="live-dot" aria-hidden="true" />
              LIVE
            </span>
          </div>
          <p className="project-desc">
            트레이딩 카드 수집가를 위한 도감 + P2P 거래 PWA. 기획,
            디자인, DB 설계, 개발, 배포, 운영까지 전 과정을 혼자
            진행했습니다.
          </p>
          <ul className="project-points">
            <li>Supabase Realtime 기반 실시간 채팅 · 알림 시스템</li>
            <li>RLS 정책 기반 보안 설계 — 거래 · 후기 · 신고 · 차단 전 영역</li>
            <li>거래 등록 → 채팅 → 거래완료 → 후기까지 P2P 전체 흐름 구현</li>
            <li>PWA 설치 배너, 멀티 디바이스 알림 설정 동기화</li>
            <li>관리자 패널(유저 · 거래 · 게시글 · 인증 관리) 직접 구축</li>
          </ul>
          <p className="project-stack">
            React · TypeScript · Vite · Supabase · Vercel · PWA
          </p>
          <div className="project-links">
            <a
              className="btn btn-primary"
              href="https://poketmon-app-kappa.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live 서비스 보기
            </a>
            <a
              className="btn btn-ghost"
              href={`${GITHUB}/poketmon-app`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project-head">
            <h3 className="project-name">TCG Tracker</h3>
            <span className="live-badge">
              <span className="live-dot" aria-hidden="true" />
              LIVE
            </span>
          </div>
          <p className="project-desc">
            TCG 판매 업체를 위한 모바일 재고 관리 웹. 실제 업체의 요구를
            받아 개발하고 배포까지 진행 중인 실무형 프로젝트입니다.
          </p>
          <ul className="project-points">
            <li>매장에서 바로 쓰는 모바일 우선 재고 관리 UI</li>
            <li>실사용 업체 피드백 기반 기능 개선 사이클 운영</li>
          </ul>
          <p className="project-stack">React · TypeScript · Vercel</p>
          <div className="project-links">
            <a
              className="btn btn-primary"
              href="https://tcg-tracker-lilac.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live 서비스 보기
            </a>
            <a
              className="btn btn-ghost"
              href={`${GITHUB}/tcg-tracker`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-lead">
          함께 만들고 싶은 것이 있다면,
          <br />
          GitHub에서 만나요.
        </p>
        <div className="project-links">
          <a
            className="btn btn-primary"
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            GitHub — @dddz223
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <span>© 2026 Woojin Oh</span>
        <span>Built with React · Deployed on GitHub Pages</span>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
