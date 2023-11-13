import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import pillarsOfCreationPng from "../../public/pillars-of-creation.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Large image</title>
        <meta
          name="description"
          content="An optimized picture of the pillars of creation"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <figure>
          <figcaption>Using path</figcaption>
          <Image
            src="/pillars-of-creation.png"
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
        </figure>
        <figure>
          <figcaption>Using static import</figcaption>
          <Image
            src={pillarsOfCreationPng}
            alt="The pillars of creation"
            height={300}
            width={900}
          ></Image>
        </figure>
        <figure>
          <figcaption>rotated???</figcaption>
          <Image
            src={pillarsOfCreationPng}
            alt="The pillars of creation"
            fill={true}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              overflow: "hidden",
            }}
      loading="lazy"
          ></Image>
        </figure>
        <figure>
          <figcaption>Unsplash</figcaption>
          <Image
            src="https://images.unsplash.com/photo-1519575706483-221027bfbb31"
            alt="Unsplash"
            height={400}
            width={600}
            quality={100}
          ></Image>
        </figure>
      </main>
    </>
  );
}
