import styled from "styled-components"
import { useState } from "react"

import ImageUploading from "react-images-uploading"
import theme from "styles/Theme"

import { ReactComponent as ImageIcon } from "assets/icons/Image.svg"
import { ReactComponent as DeleteIcon } from "assets/icons/Trash/Trash_2.svg"
import { Button } from "ant"

export default function UploadImages({ images, setImages }) {
  const maxNumber = 10
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList)
    // console.log(imageList);
  }

  return (
    <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'>
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Wrapper>
            {images.map((image, index) => {
              console.log(image);
              return (
                <>
                  <Image key={index}>
                    
                    <img src={image.data_url || image.file} />
                    <button onClick={() => onImageRemove(index)}>
                      <DeleteIcon />
                    </button>
                  </Image>
                </>
              )
            })}
            <UploadButton
              style={isDragging ? { borderColor: theme.colors.primary } : {}}
              {...dragProps}>
              <div>
                <ImageIcon />
              </div>
              <span>
                Drag and Drop an Image, or
                <Button
                  style={{ width: "auto", padding: "5px" }}
                  onClick={onImageUpload}
                  type='link'>
                  Browse
                </Button>
              </span>
            </UploadButton>
          </Wrapper>
        )}
      </ImageUploading>
    </div>
  )
}

const UploadButton = styled.div`
  border: 2px dashed ${p => p.theme.colors.gray800};
  background: none;
  border-radius: 12px;
  width: 530px;
  height: 400px;
  margin-bottom: 18px;
  color: ${p => p.theme.colors.gray500};
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    width: 42px;
    height: 42px;
    path {
      fill: ${p => p.theme.colors.gray500};
    }
  }
  button {
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Image = styled.div`
  background: none;
  border-radius: 12px;
  width: 530px;
  max-height: 400px;
  margin: 0px 12px 12px 0px;
  position: relative;
  overflow: hidden;
  height: 100%;

  img {
    width: 100%;
  }

  button {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    svg path {
      fill: ${p => p.theme.colors.gray200};
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`
