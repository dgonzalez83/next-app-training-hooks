function AppLayout({ children, appList = ["appList"] }) {
  return (
    <div className="row">
      <div className="col-10">{children}</div>
      <div className="col-2">
        <ul className="d-flex flex-column nav">
          {appList.map((route) => {
            const { path, children } = route;
            return (
              <li key={path} className="nav-item">
                <Link href={path}>
                  <a className="nav-link">{children}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AppLayout;
