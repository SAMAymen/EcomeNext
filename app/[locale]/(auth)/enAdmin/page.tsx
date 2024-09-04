import SigninForm from "./_components/SigninForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold dark:text-white">
        Welcome to Next Lite Online
      </h1>
      <p className="text-gray-500">Welcome back, Please enter your details.</p>
      <SigninForm />
    </div>
  );
}
