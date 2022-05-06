import './CustomLink.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { HiOutlineChevronRight } from "react-icons/hi";


export function CustomLink({ props }) {
  return (
    <div className="link-container">
      <a href={props.address}>
        {props.ancor}
        <HiOutlineChevronRight />
      </a>
    </div>
  );
}
