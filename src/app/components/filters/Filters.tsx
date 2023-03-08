import React, { FC } from "react";
import styles from "./styles.module.scss";
type Props = {};
interface Ifilter {
  name: string;
  fields: Array<{ label: string; value: Array<number> | string }>;
}
const filters: Array<Ifilter> = [
  {
    name: "Category",
    fields: [
      { label: "people", value: "people" },
      { label: "food", value: "food" },
      { label: "landmarks", value: "landmarks" },
    ],
  },
  {
    name: "Price range",
    fields: [
      { label: "Lower than $20", value: [0, 20] },
      { label: "$20 - $100", value: [20, 100] },
      { label: "$100 - $200", value: [100, 200] },
      { label: "More than $200", value: [200, Infinity] },
    ],
  },
];
const Filters: FC<Props> = (props) => {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <div key={filter.name} className={styles.filters__category}>
          <span className={styles.filters__title}>{filter.name}</span>
          <ul className={styles.filters__list} key={filter.name}>
            {filter.fields.map((field) => (
              <li className={styles.filters__list__field} key={field.label}>
                {
                  <>
                    <input id={field.label} type="checkbox" />
                    <label htmlFor={field.label}>{field.label}</label>
                  </>
                }
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filters;
