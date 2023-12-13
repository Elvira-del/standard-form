import Form from "./components/form/Form";
import Label from "./components/label/Label";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import Container from "./components/container/Container";
import FormWrapper from "./components/wrapper/FormWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <FormWrapper>
          <h1 className="text-xl font-bold">Sign in</h1>
          <Form>
            <Label inputId={"email"}>
              Email
              <Input
                type={"email"}
                name={"email"}
                id={"email"}
                placeholder={"Email"}
              />
            </Label>
            <Label inputId={"password"}>
              Password
              <Input
                type={"password"}
                name={"password"}
                id={"password"}
                placeholder={"Password"}
              />
            </Label>
            <Button typeButton={"submit"} text={"Sign in"} />
          </Form>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?&nbsp;
            <a
              className="font-semibold leading-6 text-rose-500 hover:text-rose-600"
              href="/signup"
            >
              Sign up
            </a>
          </p>
        </FormWrapper>
      </Container>
    </main>
  );
}
