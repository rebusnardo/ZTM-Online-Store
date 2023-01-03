import "./directory.styles.scss";
import DirectoryItem from "../directory-item/Directory-item.component";

const Directory = ({ categories }) => {
  console.log(categories);
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
