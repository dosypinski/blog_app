import { Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Categories = () => {

    const categories = useSelector(state => getAllCategories(state));

    return (
      <Container>
        <section className="px-2 col-6">
          <ListGroup>
            {categories.map((category) => (
                <ListGroupItem
                    key={category.id}
                    value={category.title}
                    as={Link} to={`/categories/${category.title}`}
                >
                    {category.title}
                </ListGroupItem>
            ))}
          </ListGroup>
        </section>
      </Container>
    );
};

export default Categories;