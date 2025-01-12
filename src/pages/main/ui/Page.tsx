import "./globals.css";

export default function Page() {
  // TODO: Add errors logging

  return (
    <>
      <h1 className="flex text-red-600 justify-center text-xl font-header">
        Launcher functionality was broken
      </h1>
      <p className="flex flex-col gap-4 justify-center text-center font-paragraph text-sm">
        The reason of that is disrespectful treatment of the developer
        <span className="text-red-600">
          The fault lies not with me, but with the owner of the project. I
          created the Launcher with the goal of providing people with a
          convenient way to install mron without bugs, but received no approval,
          only taunts.
          <br />
          So many people believe maza, but he is not who he says he is. I've
          known him for 4 years and I know what I'm talking about.
        </span>
        <span className="text-xs text-amber-300">
          If you wanna use working version of the launcher. You can compile it
          on your own
        </span>
        <span className="text-xs ">
          Thank you for your attention and I hope this message will be
          well-received by you.
        </span>
      </p>
      <p></p>
    </>
  );
}
