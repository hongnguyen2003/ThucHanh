import CatalogItem from "components/CatalogItem";
import classNames from "classnames/bind";
import style from "./Home.module.css";
import SellectBar from "components/mini.components/SellectBar";
import { useEffect, useState } from "react";
import NormalLayout from "layouts/NormalLayout";
const cx = classNames.bind(style);

export default function Home() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [group, setGroup] = useState([]);
  const [value, setValue] = useState(null);
  useEffect(() => {
    async function fetchingData() {
      try {
        const data = await fetch("http://localhost:8080/api/getListItems", {
          method: "GET",
          mode: "cors",
          credentials: "include",
        });

        const decode = await data.json();
        setData(decode);
        setFilterData(decode);
        const dataGroup = await fetch(
          "http://localhost:8080/api/getListGroups",
          {
            method: "GET",
            mode: "cors",
            credentials: "include",
          }
        );
        const decodeGroup = await dataGroup.json();
        const mappedGroup = decodeGroup.map((group) => ({
          value: group.idnhom,
          label: group.ten,
        }));

        setGroup([{ value: "all", label: "Tất cả" }, ...mappedGroup]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchingData();
  }, []);

  useEffect(() => {
    if (value) {
      if (value.value === "all") {
        setFilterData(data);
        return;
      }
      const filteredData = data.filter((item) => item.idnhom == value.value);
      setFilterData(filteredData);
    } else {
      setFilterData(data);
    }
  }, [value]);
  return (
    <NormalLayout>
      <div className={cx("container")}>
        <div className={cx("controler")}>
          <h3>Lọc dữ liệu:</h3>
          <SellectBar
            value={value}
            setValue={setValue}
            options={group}
            planeHoleder="Chọn nhóm"
          />
        </div>
        <CatalogItem sampleData={filterData} />
      </div>
    </NormalLayout>
  );
}
