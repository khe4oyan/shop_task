// libs
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../store/slices/productsSlice';

// components
import Categories from "../Categories";
import PhotoShower from "../PhotoShower";

// styles
import classes from "./styles.module.css";

export default function AddNewProduct() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [article, setArticle] = useState("");
  const [price, setPrice] = useState("");

  const {
    selectedCategoryInd,
    selectedSubCategoryInd,
    selectedGender
  } = useSelector(state => state.categoriesSlice);
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([
    {
      img: null,
      isShowTitle: true,
      className: classes.photo_1,
    },
    {
      img: null,
      isShowTitle: false,
      className: classes.photo_2,
    },
    {
      img: null,
      isShowTitle: false,
      className: classes.photo_3,
    },
    {
      img: null,
      isShowTitle: false,
      className: classes.photo_4,
    },
    {
      img: null,
      isShowTitle: false,
      className: classes.photo_5,
    },
  ]);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const setFiles = (files, i) => {
    setPhotos((prev) => {
      const newValues = [...prev];
      prev[i].img = files;
      return newValues;
    });
  };

  const removeImg = (imgInd) => {
    setPhotos((prev) => {
      const newValues = [...prev];
      newValues[imgInd].img = null;
      return newValues;
    });
  };

  const submitButtonHandler = () => {
    // check article
    const articleTrimmed = article.trim();
    if (articleTrimmed === "") {
      return;
    }
    
    // check price
    const priceTrimmed = price.trim();
    if (priceTrimmed === "") {
      return;
    }

    // check images min 1
    const photoPaths = [];
    for (let i = 0; i < photos.length; ++i) {
      if (photos[i].img) {
        photoPaths.push(photos[i].img);
        photos[i].img = null;
      }
    }

    if (photoPaths.length === 0) {
      return;
    }

    // dispatch
    dispatch(addProduct({
      article: article,
      price,
      img: photoPaths,
      categoryInd: selectedCategoryInd,
      subCategoryInd: selectedSubCategoryInd,
      gender: selectedGender,
    }));
    setArticle("");
    setPrice("");
    toggleModal();
  };

  return (
    <>
      <button className={classes.root} onClick={toggleModal}>
        Добавить Изделия
      </button>

      {isOpenModal && (
        <div className={classes.modalContainer}>
          <div className={classes.modal}>
            <div className={classes.header}>
              <h2 className={classes.headerText}>Добавить Изделия</h2>
              <button onClick={toggleModal} className={classes.closeButton}>
                +
              </button>
            </div>
            <div className={classes.content}>
              <Categories />
              <div className={classes.newProductContainer}>
                <div className={classes.photos}>
                  {photos.map((photoData, i) => (
                    <PhotoShower
                      img={photoData.img}
                      className={photoData.className}
                      isShowTitle={photoData.isShowTitle}
                      setFiles={(files) => setFiles(files, i)}
                      removeImg={() => removeImg(i)}
                      key={i}
                    />
                  ))}
                </div>

                <div className={classes.inputs}>
                  <div className={classes.inputBox}>
                    <p className={classes.inputBoxTitle}>Артикул</p>
                    <input
                      type="text"
                      className={classes.input}
                      value={article}
                      onChange={(e) => setArticle(e.target.value)}
                    />
                  </div>
                  <div className={classes.inputBox}>
                    <p className={classes.inputBoxTitle}>Цена</p>
                    <input
                      type="number"
                      className={classes.input}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.submitButtonContainer}>
                <button
                  className={classes.submitButton}
                  onClick={submitButtonHandler}
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
