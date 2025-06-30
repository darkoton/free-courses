import { Button } from "@/components/UI";
import style from "./style.module.scss";
import { Search as IconSearch } from "@/components/icons";

const courses: {
  label: string;
  active: boolean
}[] = [
    {
      label: "Marketing",
      active: false
    },
    {
      label: "Computer science",
      active: true
    },
    {
      label: "Design",
      active: false
    },
    {
      label: "Buisness",
      active: false
    },
  ]

const Search = () => {
  return (
    <div className={style.main}>
      <div className="container">
        <div className={style.body}>

          <img
            className={style.decor}
            src="/assets/img/university/decor.svg"
            alt=""
          />

          <h2 className={`h4-bold-responsive ${style.title}`}>
            Search for a program
          </h2>
          <p className={`h6-responsive ${style.text}`}>
            Choose between multiple domain
          </p>

          <div className={style.search}>
            <input
              className={`p-responsive ${style.searchInput}`}
              placeholder="Search a course"
              type="text"
            />

            <Button decor={true} className={style.searchButton}>
              <IconSearch className={style.searchIcon} />
            </Button>
          </div>

          <div className={style.courses}>
            {courses.map(course => {
              return <button
                key={course.label}
                className={`p-body-responsive ${style.course} ${course.active ? style.active : ''}`}
              >{course.label}</button>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
