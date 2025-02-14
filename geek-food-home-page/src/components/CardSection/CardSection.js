
import "./CardSection.css";

export default function CardSection(props) {
  let { id, content, blogImg, title, dept } = props.blog;

  return (
    <>
    <div className="card-container">

<div className="content">
  <p>{content}</p>
</div>
<div className="contentData">
<img src={blogImg} alt="blog-image" />
<div className="titleDept">
    <strong>{title}</strong>
    <p>{dept}</p>
</div>
</div>

</div>
</>
  );
}
