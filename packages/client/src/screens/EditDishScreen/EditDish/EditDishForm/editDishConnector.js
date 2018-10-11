import * as React from "react";
import { Form as AntForm, Button } from "antd";
import { Form, Formik, Field } from "formik";
import { withUpdateDish } from "@rufrontgen/controller";
import { InputField } from "../../../../modules/shared/inputField";
import "./ui/style.scss";

const FormItem = AntForm.Item;

class C extends React.PureComponent {
  state = {
    page: 0
  };

  submit = async (values, { setSubmitting }) => {
    alert(this.dishId);
    const dish = {
      dishId: this.dishId,
      ...values
    }
    alert(JSON.stringify(dish));
    await this.props.updateDish(
      dish
      );
    setSubmitting(false);
  };


  render() {
    const {
      match: {
        params: { dishId }
      }
    } = this.props;
    return (
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: 0,
          dishId: dishId
        }}
        onSubmit={this.submit}
      >
        {({ isSubmitting, values }) =>
        
          console.log(values) || (
            <Form style={{ display: "flex" }}>
              <div style={{ width: 400, margin: "auto" }}>
                <React.Fragment>
                  <Field
                    label="Nombre"
                    name="name"
                    placeholder="Escribe el nombre del concurso."
                    component={InputField}
                  />
                  <Field
                    label="Nombre"
                    name="description"
                    placeholder="Escribe el nombre del concurso."
                    component={InputField}
                  />
                  <Field
                    label="Nombre"
                    name="price"
                    placeholder="Escribe el nombre del concurso."
                    component={InputField}
                  />
                </React.Fragment>
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={isSubmitting}
                        >
                          Edit concurso
                        </Button>
                      </div>
                  </div>
                </FormItem>
              </div>
            </Form>
          )}
      </Formik>
    );
  }
}

export const EditDishConnector = withUpdateDish(C);
