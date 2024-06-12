import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to <strong>FoodieHub</strong>, where your cravings meet
            convenience! We are more than just a food delivery service; we are
            your culinary companion, bringing delightful dishes from your
            favorite local eateries right to your doorstep.
          </p>

          <p>
            FoodieHub was born out of a passion for great food and a desire to
            make dining experiences accessible to everyone, anywhere. It all
            started in 2018 when our founders, Jane and John Doe, were
            frustrated by the lack of convenient options for enjoying
            restaurant-quality meals at home. Their love for diverse cuisines
            and their entrepreneurial spirit led to the creation of FoodieHub.
          </p>

          <p>
            Thank you for being part of our story. Together, let’s make every
            meal memorable.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +91 1234506789
          </a>
        </div>
      </section>
    </>
  );
}
