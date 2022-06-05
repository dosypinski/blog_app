import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect} from "react-bootstrap"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [mainContent, setMainContent] = useState(props.mainContent || '');
    const [mainContentError, setMainContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [category, setCategory] = useState(props.category || '');

    const categories = useSelector(state => getAllCategories(state));

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = e => {
        setMainContentError(!mainContent)
        setDateError(!publishedDate)
        if (mainContent || publishedDate) {
          action({ title, author, publishedDate, shortDescription, mainContent, category})  
        }
        
    };

    return (
      <Form className="col-6 mx-5 px-5" onSubmit={validate(handleSubmit)}>
        <FormGroup className="py-3 col-6">
          <FormLabel>Title:</FormLabel>
          <FormControl
            {...register("title", { required: true, minLength: 3 })}
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          {errors.title && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </FormGroup>

        <FormGroup className="py-3 col-6">
          <FormLabel>Author:</FormLabel>
          <FormControl
            {...register("author", { required: true, minLength: 3 })}
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </FormGroup>

        <FormGroup className="py-3">
          <FormLabel>Published:</FormLabel>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          {dateError && (
            <small className="d-block form-text text-danger mt-2">
              You must choose the date
            </small>
          )}
        </FormGroup>

        <FormGroup className="py-3">
          <FormLabel>Category</FormLabel>
          <FormSelect onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
              <option
                key={category.id}
                className="d-flex align-items-stretch"
                value={category.title}
              >
                {category.title}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

        <FormGroup className="py-3">
          <FormLabel>Short Description</FormLabel>
          <FormControl
            {...register("shortDescription", { required: true, minLength: 20 })}
            placeholder="Leave a comment here"
            as="textarea"
            rows={3}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </FormGroup>

        <FormGroup className="py-3">
          <FormLabel>Main Content</FormLabel>
          <FormControl
            size="lg"
            theme="snow"
            as={ReactQuill}
            rows={9}
            placeholder="Leave a comment here"
            defaultValue={mainContent}
            onChange={setMainContent}
          />
          {mainContentError && (
            <small className="d-block form-text text danger mt-2">
              Content can't be empty
            </small>
          )}
        </FormGroup>

        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    );
};

export default PostForm;