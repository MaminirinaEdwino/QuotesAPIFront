import { FaSearch } from "react-icons/fa";

export default function SearchBar({value, onChange}) {
    return <form id="search">
            <input type="text" placeholder="Search" id="searchBar" value={value} onChange={(e) => onChange(e.target.value)} />
        </form>
}