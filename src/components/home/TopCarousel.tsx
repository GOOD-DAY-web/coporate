import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Layouts/Carousel.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopCarousel = () => {
  const images: string[] = [
    "/media/Noda_sliderimg_00.jpg",
    "/media/Noda_sliderimg_01.jpg",
    "/media/main_slider_00.jpg",
    "/media/main_slider_01.jpg",
    "/media/main_slider_02.jpg",
  ];
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        showArrows={true}
        showThumbs={false}
        statusFormatter={() => ``}
      >
        <div>
          <Image
            className={styles.carousel}
            src={images[0]}
            alt={"GOOD-DAY岡山野田店スタイリスト募集中"}
            width={2000}
            height={1250}
          />
          <Link href={`/recruit`} passHref>
            <p className={styles.carouselInfo}>詳しく見る</p>
          </Link>
        </div>
        <div>
          <Image
            className={styles.carousel}
            src={images[1]}
            alt={"GOOD-DAY岡山野田店"}
            width={2000}
            height={1250}
          />
        </div>
        <div>
          <Image
            className={styles.carousel}
            src={images[2]}
            alt={"GOOD-DAY倉敷中島店"}
            width={2000}
            height={1250}
          />
        </div>
        <div>
          <Image
            className={styles.carousel}
            src={images[3]}
            alt={"GOOD-DAY倉敷中島店"}
            width={2000}
            height={1250}
          />
        </div>
        <div>
          <Image
            className={styles.carousel}
            src={images[4]}
            alt={"GOOD-DAY倉敷中島店"}
            width={2000}
            height={1250}
          />
        </div>
        {/* {images.map((url, index) => (
          <div key={index}>
            <Image
              src={url}
              height={1250}
              width={2000}
              alt={"Topスライダーです"}
            />
          </div>
        ))} */}
      </Carousel>
    </>
  );
};

export default TopCarousel;
