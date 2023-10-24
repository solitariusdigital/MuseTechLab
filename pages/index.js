import { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "@/context/stateContext";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Pyramid from "@/components/Pyramid";

const Canvas = dynamic(() => import("../components/Canvas"), {
  ssr: false,
});

export default function Home() {
  const { language, setLanguage } = useContext(StateContext);
  const [colorOne, setColorOne] = useState("#AF7AC5");
  const [colorTwo, setColorTwo] = useState("#F39C12");
  const [expandProcess, setExpandProcess] = useState(false);
  const [expandEducation, setExpandEducation] = useState(false);

  const colors = [
    "#F06060",
    "#5DADE2",
    "#AF7AC5",
    "#F39C12",
    "#8CBEB2",
    "#F4D03F",
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
      <Pyramid />
      <div className={classes.header}>
        <h2 className={classes.english}>
          <span style={{ color: colorOne }} className={classes.english}>
            MuseTech
          </span>
          <span className={classes.labText}>Lab</span>
        </h2>
        {!language && (
          <h2>
            لابراتوار <span style={{ color: colorTwo }}>فناوری میوز</span>
          </h2>
        )}
      </div>
      <div className={classes.bannerContainer}>
        <div className={classes.banner}>
          <ScienceIcon sx={{ fontSize: 45, color: "#F06060" }} />
          {!language && <h3>طراحی تجربه کاربری</h3>}
          <h3>User Experience Design</h3>
        </div>
        <div className={classes.banner}>
          <BrushIcon sx={{ fontSize: 45, color: "#5DADE2" }} />
          {!language && <h3>نمونه سازی رابط کاربری</h3>}
          <h3>User Interface Design</h3>
        </div>
        <div className={classes.banner}>
          <PrecisionManufacturingIcon sx={{ fontSize: 45, color: "#AF7AC5" }} />
          {!language ? (
            <h3>توسعه نرم‌‌افزار، وب اپلیکیشن، وب سایت</h3>
          ) : (
            <h3>Software development, Web application, Website</h3>
          )}
        </div>
        <div className={classes.banner}>
          <ScatterPlotIcon sx={{ fontSize: 45, color: "#F39C12" }} />
          {!language ? (
            <h3>مدل سازی ساختار داده، پشتیبانی و ارتقا کارایی</h3>
          ) : (
            <h3>Data structure, Support, Performance improvement</h3>
          )}
        </div>
      </div>
      <div className={classes.button}>
        <button
          onClick={() =>
            window.open(
              !language
                ? "https://docs.google.com/forms/d/e/1FAIpQLSdqKHLBydQIfm06LTtw0wELHaDJJFGU3GNQFsVWNd3t0jz5hA/viewform?usp=sf_link"
                : "https://docs.google.com/forms/d/e/1FAIpQLSfpCOHJ0Y0myLiaVxvHBjypDKYeA8eE-YsrtBctyzvLJ07ZaA/viewform?usp=sf_link",
              "_self"
            )
          }
        >
          {!language ? "درخواست مشاوره" : "Consultation"}
        </button>
      </div>
      <div className={classes.description}>
        {!language ? (
          <h3>
            هدف ما از توسعه نرم افزار انتقال ایده ها و طرح ها به راه حل های عملی
            و حل مشکلات است. مهارت های برنامه نویسی ما این فرصت را برای شما
            فراهم می کند تا طرح های مینیمال و در عین حال نوآورانه، خلاق تر و
            سازنده تر باشند. توجه به جزییات و توسعه پلتفورم مدرن و سریع مطابق با
            استانداردهای جهانی تنها شروع کار است
          </h3>
        ) : (
          <h3>
            Our purpose to develop a software is to transfer ideas and plans to
            practical solutions and solve problems. Our programming skills
            provide you with the opportunity to have minimal and innovative
            designs, yet creative and productive. Paying attention to details
            and developing a modern and fast platform according to global
            standards is just the beginning
          </h3>
        )}
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
      <div className={classes.header}>
        <h2>{!language ? "خدمات نرم‌‌افزار" : "Software Services"}</h2>
      </div>
      <div className={classes.bannerServices}>
        <div className={classes.banner}>
          {!language ? (
            <h3>سایت شخصی حرفه‌ای </h3>
          ) : (
            <h3>Professional personal site</h3>
          )}
          {!language ? (
            <h3>سایت شرکتی حرفه‌ای </h3>
          ) : (
            <h3>Professional corporate site</h3>
          )}
        </div>
        <div className={classes.banner}>
          {!language ? <h3>فروشگاه اینترنتی</h3> : <h3>Online shop</h3>}
          {!language ? <h3>سایت پزشکی</h3> : <h3>Medical site</h3>}
        </div>
        <div className={classes.banner}>
          {!language ? (
            <h3>سایت نوبت دهی برای کسب و کار</h3>
          ) : (
            <h3>Appointment site for business</h3>
          )}
          {!language ? (
            <h3>نرم افزار تحت وب / ​وب اپلیکیشن</h3>
          ) : (
            <h3>Software / Web application</h3>
          )}
        </div>
      </div>
      <div className={classes.infomration}>
        <div
          className={classes.rowTitle}
          onClick={() => setExpandProcess(!expandProcess)}
        >
          {!language ? (
            <Fragment>
              <h3>فرایند توسعه نرم‌‌افزار</h3>
              {expandProcess ? (
                <ExpandLessIcon sx={{ fontSize: 30 }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 30 }} />
              )}
            </Fragment>
          ) : (
            <Fragment>
              {expandProcess ? (
                <ExpandLessIcon sx={{ fontSize: 30 }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 30 }} />
              )}
              <h3>Software development process</h3>
            </Fragment>
          )}
        </div>
        {expandProcess && (
          <div className="animate__animated animate__zoomIn">
            <div className={classes.item}>
              {!language ? (
                <div className={classes.row}>
                  <ScienceIcon sx={{ color: "#F06060" }} />
                  <h3>تحلیل نیازها</h3>
                </div>
              ) : (
                <div className={classes.rowEnglish}>
                  <ScienceIcon sx={{ color: "#F06060" }} />
                  <h3>Requirements analysis</h3>
                </div>
              )}
              {!language ? (
                <p>
                  کارکردها و خدمات نرم‌افزار شناسایی میشود تا راه حل هایی ضروری
                  و مفید برای مخاطب و مشتریان شناسایی شود. برای دستیابی به محصول
                  باکیفیت، جزییات هر بخش از کار، طرح نهایی و پارامترها بررسی
                  میشود
                </p>
              ) : (
                <p className={classes.rowEnglish}>
                  Software functions and services are identified to spot
                  necessary and useful solutions for the audience and customers.
                  To achieve a high-quality product, the details of each part of
                  the work, the final design and the parameters are evaluated
                </p>
              )}
            </div>
            <div className={classes.item}>
              {!language ? (
                <div className={classes.row}>
                  <BrushIcon sx={{ color: "#5DADE2" }} />
                  <h3>توسعه طراحی</h3>
                </div>
              ) : (
                <div className={classes.rowEnglish}>
                  <BrushIcon sx={{ color: "#5DADE2" }} />
                  <h3>Design development</h3>
                </div>
              )}
              {!language ? (
                <p>
                  مشخصه‌های فنی مورد نیاز برای خلق نرم‌افزار ترسیم میشود. عواملی
                  مانند فناوری‌های قابل‌ استفاده، زمان، بودجه، محدودیت‌های
                  پروژه، معماری طراحی، اجزا، ارتباطات، فرانت اند و جریان کاربر
                  مشخص میشود
                </p>
              ) : (
                <p className={classes.rowEnglish}>
                  The technical characteristics needed to create the software
                  are drawn. Factors such as applicable technologies, time,
                  budget, limitations, design, architecture, components,
                  communications, front end and user flow are specified
                </p>
              )}
            </div>
            <div className={classes.item}>
              {!language ? (
                <div className={classes.row}>
                  <PrecisionManufacturingIcon sx={{ color: "#AF7AC5" }} />
                  <h3>توسعه و پیاده‌سازی</h3>
                </div>
              ) : (
                <div className={classes.rowEnglish}>
                  <PrecisionManufacturingIcon sx={{ color: "#AF7AC5" }} />
                  <h3>Development & implementation</h3>
                </div>
              )}
              {!language ? (
                <p>
                  براساس مشخصه‌های محصول و نیازمندی‌ها در مراحل قبل، فرانت اند و
                  بک اند توسعه داده میشود و کدها بازبینی و آزمایش میشوند. سپس
                  محصول به مرحله‌ پیاده‌سازی می‌رسد و هماهنگی محصول با نیازها
                  مورد آزمایش قرار میگیرد
                </p>
              ) : (
                <p className={classes.rowEnglish}>
                  Based on the product characteristics and requirements in the
                  previous stages of design, frontend and backend are developed
                  and codes are reviewed and tested. Then the product reaches
                  the stage of implementation and coordination with requirements
                </p>
              )}
            </div>
            <div className={classes.item}>
              {!language ? (
                <div className={classes.row}>
                  <PrecisionManufacturingIcon sx={{ color: "#AF7AC5" }} />
                  <h3>آزمایش</h3>
                </div>
              ) : (
                <div className={classes.rowEnglish}>
                  <PrecisionManufacturingIcon sx={{ color: "#AF7AC5" }} />
                  <h3>Testing</h3>
                </div>
              )}
              {!language ? (
                <p>
                  محصول از لحاظ داشتن باگ آزموده می‌شود و عملکرد آن پیش از تحویل
                  به کاربر بازبینی میشود تا زمانی که نرم‌افزار بدون وجود باگ کار
                  کند و مطابق با نیازها باشد
                </p>
              ) : (
                <p className={classes.rowEnglish}>
                  The product is tested for bugs and performance. It is reviewed
                  before delivery to the user until the software works without
                  bugs and satisfies all requirements
                </p>
              )}
            </div>
            <div className={classes.item}>
              {!language ? (
                <div className={classes.row}>
                  <ScatterPlotIcon sx={{ color: "#F39C12" }} />
                  <h3>استقرار و پشتیبانی</h3>
                </div>
              ) : (
                <div className={classes.rowEnglish}>
                  <ScatterPlotIcon sx={{ color: "#F39C12" }} />
                  <h3>Deployment & support</h3>
                </div>
              )}

              {!language ? (
                <p>
                  هنگامی که نرم‌افزار هیچ نقصی نداشته باشد به مشتری ارائه داده
                  میشود. پس از ارائه‌ نسخه‌ تولیدی نرم‌افزار، مشکلات کاربر هنگام
                  کار با محصول مدیریت میشود. درصورتی‌ که نرم‌افزار با مشکل
                  روبه‌رو شود آپدیت انجام میگیرد
                </p>
              ) : (
                <p className={classes.rowEnglish}>
                  When the software does not have any defects, it will be
                  provided to the customer. After providing the production
                  version of the software, user's problems with the product are
                  managed. If the software is facing a problem update will be
                  completed
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={classes.infomration}>
        <div
          className={classes.rowTitle}
          onClick={() => setExpandEducation(!expandEducation)}
        >
          {!language ? (
            <Fragment>
              <h3>تحصیلات</h3>
              {expandEducation ? (
                <ExpandLessIcon sx={{ fontSize: 30 }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 30 }} />
              )}
            </Fragment>
          ) : (
            <Fragment>
              {expandEducation ? (
                <ExpandLessIcon sx={{ fontSize: 30 }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 30 }} />
              )}
              <h3>Education</h3>
            </Fragment>
          )}
        </div>
        {expandEducation && (
          <div className="animate__animated animate__zoomIn">
            <div className={classes.item}>
              <div className={classes.rowEnglish}>
                <Image width={40} height={40} src={ga} alt="lab" priority />
                <h3>General Assembly Melbourne Australia</h3>
              </div>
              {!language ? (
                <p className={classes.rowEnglish}>مهندس نرم افزار همه جانبه</p>
              ) : (
                <p className={classes.rowEnglish}>
                  Software Engineering Immersive
                </p>
              )}
              <p className={classes.rowEnglish}>2019</p>
            </div>
            <div className={classes.item}>
              <div className={classes.rowEnglish}>
                <Image
                  width={40}
                  height={40}
                  src={newcastle}
                  alt="lab"
                  priority
                />
                <h3>The University of Newcastle Australia</h3>
              </div>
              {!language ? (
                <p className={classes.rowEnglish}>ارشد معماری</p>
              ) : (
                <p className={classes.rowEnglish}>Master of Architecture</p>
              )}
              <p className={classes.rowEnglish}>2011</p>
            </div>
            <div className={classes.item}>
              <div className={classes.rowEnglish}>
                <Image width={40} height={40} src={deakin} alt="lab" priority />
                <h3>Deakin University Melbourne Australia</h3>
              </div>
              {!language ? (
                <p className={classes.rowEnglish}>کارشناس طراحی</p>
              ) : (
                <p className={classes.rowEnglish}>Bachelor of Design</p>
              )}
              <p className={classes.rowEnglish}>2009</p>
            </div>
          </div>
        )}
      </div>
      <div className={classes.button}>
        <button
          onClick={() =>
            window.open(
              !language
                ? "https://docs.google.com/forms/d/e/1FAIpQLSdqKHLBydQIfm06LTtw0wELHaDJJFGU3GNQFsVWNd3t0jz5hA/viewform?usp=sf_link"
                : "https://docs.google.com/forms/d/e/1FAIpQLSfpCOHJ0Y0myLiaVxvHBjypDKYeA8eE-YsrtBctyzvLJ07ZaA/viewform?usp=sf_link",
              "_self"
            )
          }
        >
          {!language ? "درخواست مشاوره" : "Consultation"}
        </button>
      </div>
      <div className={classes.description}>
        {!language ? (
          <h3>
            میوز منبع الهام یک هنرمند است، اما این منبع می‌تواند به اشکال مختلف
            آشکار شود، چه اینطور باشد خود را به عنوان الگوی یک هنرمند یا فقط
            ارائه مشاوره و پشتیبانی از طریق فرآیندی خلاق
          </h3>
        ) : (
          <h3>
            “Muse supposedly provides a source of inspiration for an artist, but
            that source can come in so many different forms, whether that’s
            posing as an artist’s model or just offering advice and support
            through the creative process”
          </h3>
        )}
      </div>
      <div className={classes.canvasContainer}>
        <div className={classes.canvas}>
          <Canvas />
        </div>
      </div>
      <div className={classes.header}>
        <h2 className={classes.english}>
          <span style={{ color: colorOne }} className={classes.english}>
            MuseTech
          </span>
          <span className={classes.labText}>Lab</span>
        </h2>
        {!language && (
          <h2>
            لابراتوار <span style={{ color: colorTwo }}>فناوری میوز</span>
          </h2>
        )}
      </div>
      <div className={classes.footer}>
        <div
          className={classes.row}
          onClick={() => window.open("tel:09121089341", "_self")}
        >
          <PhoneIphoneOutlinedIcon />
          <p>0912 108 9341</p>
        </div>
        <div className={classes.row}>
          <AlternateEmailIcon />
          <p>pouyan.mad@gmail.com</p>
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
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
}
