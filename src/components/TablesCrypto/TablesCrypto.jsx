import React from "react";
import styled from "../TablesCrypto/TablesCrypto.module.css";
// import { Link } from "react-router-dom";

const HeadTable = [
  {
    sharp: "#",
  },
  {
    title: "Name",
  },
  {
    title: "Price",
  },
  {
    title: "1h %",
  },
  {
    title: "24h %",
  },
  {
    title: "7d %",
  },
  {
    title: "Market Cap",
    icn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-info-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
  },
  {
    title: "Volume (24h)",
    icn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-info-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
  },
  {
    title: "Circulating Supply",
    icn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-info-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
  },
  {
    title: "Last 7 Days",
  },
];

const TablesCrypto = () => {
  return (
    <div className={styled.tablesHead}>
      <div>
        {HeadTable.map((item, index) => (
          <ul key={index}>
            <li
              className={`${index === 1 ? "me-72" : ""} ${
                index === 8 ? "me-16" : ""
              }`}
            >
              {item.sharp}
              {item.title}
              {item.icn}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TablesCrypto;
