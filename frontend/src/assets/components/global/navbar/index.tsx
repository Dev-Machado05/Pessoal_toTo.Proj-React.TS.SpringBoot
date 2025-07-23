import "./style.scss";

type navbarProps = {
    s_page: "view" | "add" | "delete" | "completed";
    s_state?: "dinamic" | "fixed";
};

type navItem = {
    s_content: string;
    s_name: string;
    s_className: string;
    s_href: string;
}

const navItems: navItem[] = [
    {s_content: "Visualizar", s_name: "view", s_className: "viewLink", s_href:"/View"},
    {s_content: "Adicionar", s_name: "add", s_className: "addLink", s_href:"/CreateTask"},
    {s_content: "Remover", s_name: "delete", s_className: "deleteLink", s_href:"/RemoveTask"},
    {s_content: "Concluida", s_name: "completed", s_className: "completeLink", s_href:"/Complete"}
]

const NavBar = ({s_page, s_state}: navbarProps) => {
    return (
        <header className={s_state === "dinamic" ? `dinamic-navBar_Container` : `fixed-navBar_Container`}>
            <nav className="navBar_Content">
                {navItems.map(({s_content, s_name, s_className, s_href}) => (
                    <a 
                    key={s_name}
                    className={ s_page === s_name ? `${s_className} actualPage` : s_className}
                    href={`${s_href}`}
                    >{s_content}</a>
                ))}
            </nav>
        </header>
    );
}


export default NavBar;