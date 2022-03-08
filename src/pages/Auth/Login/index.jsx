import { Button, Input } from "ant"
import Heading from "ant/Heading"

import {
    Wrapper,
    Left,
    LogoWrapper,
    InputWrapper,
    Tagline,
    CreateAccount,
    Copyright,
    Right,
    LeftInner,
    Error,
} from "./styles"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { CallLogin } from "api/auth/login"
import CarouselPic from "assets/Carousel.png"
import { ReactComponent as Logo } from "assets/Logo.svg"
import { ReactComponent as Arrow } from "assets/icons/Arrow/Arrow 2/Right.svg"

import { useRef } from "react"

import { Formik } from "formik"

import { useHistory } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const { push: redirectTo } = useHistory()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    const submitButtonRef = useRef()
    const onSubmit = () => {
        submitButtonRef.current.click()
    }

    return (
        <Wrapper>
            <Left>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={values => {
                        const errors = {}
                        if (!values.email.trim()) {
                            errors.email = "Email is Required"
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid Email Address"
                        }

                        if (!values.password.trim()) {
                            errors.password = "Password is Required"
                        }

                        return errors
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        const res = await CallLogin({
                            email: values.email,
                            password: values.password,
                        })
                        if (res.status === "inactive") {
                            console.log("invalid")
                        } else if (res.status === "active") {
                            localStorage.setItem("uid", res.data[0].id)
                            localStorage.setItem("muutos-u-role", 'vendor');
                            window.location.href = "/dashboard"
                        }
                        setSubmitting(false)
                    }}>
                    {({
                        values,
                        errors,
                        handleChange,
                        touched,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <LeftInner onSubmit={handleSubmit}>
                            <LogoWrapper>
                                <Logo />
                            </LogoWrapper>
                            <Heading
                                style={{ textAlign: "center", width: "100%" }}>
                                Log In
                            </Heading>
                            <Tagline>
                                See your growth and get consulting support!
                            </Tagline>
                            <InputWrapper>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='email'
                                    value={values.email}
                                    placeholder='Email'
                                />
                                <Error>
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </Error>
                            </InputWrapper>
                            <InputWrapper>
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='password'
                                    type='password'
                                    value={values.password}
                                    placeholder='Password'
                                />
                                <Error>
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </Error>
                            </InputWrapper>
                            <Button className='forgot-password-btn' type='link'>
                                Forgot Password?
                            </Button>
                            <button
                                type='submit'
                                ref={submitButtonRef}
                                style={{ display: "none" }}></button>
                            <Button
                                onClick={onSubmit}
                                loading={isSubmitting}
                                type='primary'>
                                Log In
                            </Button>
                            <CreateAccount>
                                Not Registered Yet?{" "}
                                <Button type='link'>Create an Account.</Button>
                            </CreateAccount>
                            <Copyright>
                                &copy; 2021 Muutos, All rights reserved.{" "}
                            </Copyright>
                        </LeftInner>
                    )}
                </Formik>
            </Left>
            <Right>
                <SubFlex>
                    <CarouselComp
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    type='button'
                                    onClick={onClickHandler}
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        bottom: "90px",
                                        background: "#3F3F46",
                                        border: "none",
                                        width: "48px",
                                        height: "48px",
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        right: 15,
                                    }}>
                                    <Arrow
                                        width='16px'
                                        stroke=' #D4D4D8'
                                        onClick={onClickHandler}
                                        style={{
                                            cursor: "pointer",
                                            margin: "auto",
                                        }}
                                    />
                                </button>
                            )
                        }
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={3000}
                        showStatus={false}>
                        <ImageWrapper>
                            <img src={CarouselPic} />
                            <H> {"Clean & Minimal Vendor Panel "} </H>
                            <P>
                                Pharetra in justo, rutrum risus tempus. Felis in
                                sed nibh at nisl.
                            </P>
                        </ImageWrapper>
                        <ImageWrapper>
                            <img src={CarouselPic} />
                            <H> {"Clean & Minimal Vendor Panel"} </H>
                            <P>
                                Pharetra in justo, rutrum risus tempus. Felis in
                                sed nibh at nisl.
                            </P>
                        </ImageWrapper>
                        <ImageWrapper>
                            <img src={CarouselPic} />
                            <H> {"Clean & Minimal Vendor Panel"} </H>
                            <P>
                                Pharetra in justo, rutrum risus tempus. Felis in
                                sed
                            </P>
                            <P>nibh at nisl.</P>
                        </ImageWrapper>
                    </CarouselComp>
                </SubFlex>
            </Right>
        </Wrapper>
    )
}
const CarouselComp = styled(Carousel)`
    display: flex;
    .control-arrow.control-prev {
        display: none;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .thumbs-wrapper.axis-vertical {
        display: none;
    }
`
const SubFlex = styled.div`
    width: 80%;
    margin: auto;
`
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100%;
        margin-bottom: 40px;
    }
    margin-bottom: 40px;
`
const H = styled.div`
    font-weight: 600;
    font-size: 32px;
    width: 80%;
    color: #ffffff;
    margin-bottom: 18px;
`
const P = styled.div`
    font-size: 16px;

    color: ${p => p.theme.colors.gray400};
`
