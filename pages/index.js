import { useState, useContext, useRef, Fragment, useEffect } from "react";
import classes from "./home.module.scss";
import Menu from "@/components/Menu";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import techlab from "@/assets/techlab.png";
import deakin from "@/assets/deakin.png";
import newcastle from "@/assets/newcastle.png";
import ga from "@/assets/ga.png";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BrushIcon from "@mui/icons-material/Brush";
import ScienceIcon from "@mui/icons-material/Science";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import logo from "@/assets/lab.png";
import MinimalTechLab from "@/assets/MinimalTechLab.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Canvas = dynamic(() => import("../components/Canvas"), {
  ssr: false,
});

export default function Home() {
  const [colorOne, setColorOne] = useState("#AF7AC5");
  const [colorTwo, setColorTwo] = useState("#F39C12");

  const [expandProcess, setExpandProcess] = useState(false);
  const [expandEducation, setExpandEducation] = useState(false);

  const colors = [
    "#AF7AC5",
    "#E74C3C",
    "#5DADE2",
    "#52BE80",
    "#8CBEB2",
    "#60f0f0",
    "#F06060",
    "#F4D03F",
    "#F39C12",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorOne(colors[Math.floor(Math.random() * colors.length)]);
      setColorTwo(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.menu}>
        <Menu />
      </div>
      <div className={classes.canvasContainer}>
        <div className={classes.canvas}>
          <Canvas />
        </div>
      </div>
      <div className={classes.header}>
        <h2 className={classes.english}>
          Minimal{" "}
          <span style={{ color: colorOne }} className={classes.english}>
            Tech Lab
          </span>
        </h2>
        <h2>
          لابراتوار فناوری <span style={{ color: colorTwo }}>مینیمال</span>
        </h2>
      </div>
      <div className={classes.bannerContainer}>
        <div className={classes.banner}>
          <ScienceIcon sx={{ fontSize: 45, color: "#F06060" }} />
          <h2>طراحی تجربه کاربری</h2>
          <h2 className={classes.english}>User Experience</h2>
        </div>
        <div className={classes.banner}>
          <BrushIcon sx={{ fontSize: 45, color: "#5DADE2" }} />
          <h2>نمونه سازی رابط کاربری</h2>
          <h2 className={classes.english}>User Interface</h2>
        </div>
        <div className={classes.banner}>
          <PrecisionManufacturingIcon sx={{ fontSize: 45, color: "#AF7AC5" }} />
          <h2>توسعه نرم افزار، وب اپلیکیشن، وب سایت</h2>
        </div>
        <div className={classes.banner}>
          <ScatterPlotIcon sx={{ fontSize: 45, color: "#F39C12" }} />
          <h2>مدل سازی ساختار داده، پشتیبانی و ارتقا کارایی</h2>
        </div>
      </div>
      <div className={classes.button}>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdqKHLBydQIfm06LTtw0wELHaDJJFGU3GNQFsVWNd3t0jz5hA/viewform?usp=sf_link",
              "_ self"
            )
          }
        >
          درخواست مشاوره
        </button>
      </div>
      <div className={classes.description}>
        <h3>
          هدف از توسعه نرم افزار انتقال ایده ها و طرح ها به راه حل های عملی و حل
          مشکلات است. مهارت های برنامه نویسی ما این فرصت را برای شما فراهم می
          کند تا طرح های مینیمال و در عین حال نوآورانه، خلاق تر و سازنده تر
          باشند
        </h3>
      </div>
      <div className={classes.spinner}></div>
      <div className={classes.imageHero}>
        <Image
          className={classes.image}
          layout="fill"
          objectFit="contain"
          src={techlab}
          alt="lab"
          priority
        />
      </div>
      <div className={classes.infomration}>
        <div
          className={classes.rowTitle}
          onClick={() => setExpandProcess(!expandProcess)}
        >
          <h2>فرایند توسعه نرم‌‌افزار</h2>
          {expandProcess ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        {expandProcess && (
          <div className="animate__animated animate__zoomIn">
            <div className={classes.item}>
              <div className={classes.row}>
                <ScienceIcon sx={{ color: "#F06060" }} />
                <h3>تحلیل نیازها</h3>
              </div>
              <p>
                برای توسعه نرم‌افزار طوفان فکری درمورد فرایند صورت می‌گیرد.
                کارکردها و خدمات نرم‌افزار شناسایی میشود تا راه حل هایی ضروری و
                مفید برای مخاطب و مشتریان شناسایی شود. برای دستیابی به محصول
                باکیفیت، جزییات هر بخش از کار، طرح نهایی و پارامترها بررسی میشود
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <BrushIcon sx={{ color: "#5DADE2" }} />
                <h3>توسعه طراحی</h3>
              </div>
              <p>
                مشخصه‌های فنی تخصصی مورد نیاز برای خلق نرم‌افزار ترسیم میشود.
                عواملی مانند فناوری‌های قابل‌ استفاده، زمان، بودجه، محدودیت‌های
                پروژه، روش و طراحی معماری شناسایی میشود. معماری طراحی، اجزا،
                ارتباطات، فرانت اند و جریان کاربر مشخص میشود
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <PrecisionManufacturingIcon sx={{ color: "#AF7AC5" }} />
                <h3>توسعه و پیاده‌سازی</h3>
              </div>
              <p>
                براساس مشخصه‌های محصول و نیازمندی‌هایی که در مراحل قبل کدنویسی
                میشود. فرانت اند و بک اند توسعه داده میشود و کدها بازبینی و
                آزمایش میشوند. سپس محصول به مرحله‌ پیاده‌سازی می‌رسد و هماهنگی
                محصول با نیازها مورد آزمایش قرار میگیرد
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <PrecisionManufacturingIcon sx={{ color: "#AF7AC5" }} />
                <h3>آزمایش</h3>
              </div>
              <p>
                در مرحله‌ آزمایش محصول از لحاظ داشتن باگ آزموده می‌شود و عملکرد
                آن پیش از تحویل به کاربر بازبینی میشود تا زمانی که نرم‌افزار
                بدون وجود باگ کار کند و مطابق با نیازها باشد
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <ScatterPlotIcon sx={{ color: "#F39C12" }} />
                <h3>استقرار نرم‌افزار و پشتیبانی</h3>
              </div>
              <p>
                هنگامی که نرم‌افزار هیچ نقصی نداشته باشد به مشتری ارائه داده
                میشود. پس از ارائه‌ نسخه‌ تولیدی نرم‌افزار، مشکلات کاربر هنگام
                کار با محصول مدیریت میشود. درصورتی‌ که نرم‌افزار با مشکل روبه‌رو
                شود آپدیت انجام میگیرد
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={classes.infomration}>
        <div
          className={classes.rowTitle}
          onClick={() => setExpandEducation(!expandEducation)}
        >
          <h2>تحصیلات</h2>
          {expandEducation ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
        {expandEducation && (
          <div className="animate__animated animate__zoomIn">
            <div className={classes.item}>
              <div className={classes.row}>
                <Image width={40} height={40} src={ga} alt="lab" priority />
                <h3 className={classes.english}>
                  General Assembly Melbourne Australia
                </h3>
              </div>
              <p>مهندس نرم افزار همه جانبه</p>
              <p className={classes.english}>2019</p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <Image
                  width={40}
                  height={40}
                  src={newcastle}
                  alt="lab"
                  priority
                />
                <h3 className={classes.english}>
                  The University of Newcastle Australia
                </h3>
              </div>
              <p>ارشد معماری</p>
              <p className={classes.english}>2011</p>
            </div>
            <div className={classes.item}>
              <div className={classes.row}>
                <Image width={40} height={40} src={deakin} alt="lab" priority />
                <h3 className={classes.english}>
                  Deakin University Melbourne Australia
                </h3>
              </div>
              <p>کارشناس طراحی</p>
              <p className={classes.english}>2009</p>
            </div>
          </div>
        )}
      </div>
      <div className={classes.button}>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdqKHLBydQIfm06LTtw0wELHaDJJFGU3GNQFsVWNd3t0jz5hA/viewform?usp=sf_link",
              "_ self"
            )
          }
        >
          درخواست مشاوره
        </button>
      </div>
      <div className={classes.description}>
        <h3>توجه به جزییات و توسعه پلتفورم مینیمال، مدرن و سریع </h3>
        <h3>مطابق با استانداردهای جهانی تنها شروع کار است</h3>
      </div>
      <div
        className={classes.imageBottom}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <Image
          className={classes.image}
          layout="fill"
          objectFit="contain"
          src={logo}
          alt="lab"
          priority
        />
      </div>
      <Image
        width={220}
        height={220}
        src={MinimalTechLab}
        alt="logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        priority
      />
      <div className={classes.footer}>
        <div
          className={classes.row}
          onClick={() => window.open("tel:09121089341", "_self")}
        >
          <PhoneIphoneOutlinedIcon />
          <p className={classes.english}>0912 108 9341</p>
        </div>
        <div className={classes.row}>
          <AlternateEmailIcon />
          <p className={classes.english}>pouyan.mad@gmail.com</p>
        </div>
        <div
          className={classes.row}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/pouyanmadanipour/",
              "_ self"
            )
          }
        >
          <LinkedInIcon />
          <p className={classes.english}>LinkedIn</p>
        </div>
      </div>
    </div>
  );
}
