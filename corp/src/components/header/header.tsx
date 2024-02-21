import Link from "next/link";

const Header = () => {
    return (
        <div className="text-white  flex p-5">
            <div className="flex-1">
                <p className="text-3xl">Corp Solution</p>
            </div>
            <div className="text-3xl">
                <Link className="px-10" href='/'>Home</Link>
                <Link className="px-10" href="/performance">Performance</Link>
                <Link className="px-10" href="/reliability">Reliability</Link>
                <Link className="px-10" href="/scale">Scale</Link>
            </div>
        </div>
    )
}

export default Header;