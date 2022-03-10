export const languages = ["hindi", "english"]
export const statuses = { Active: 1, Disable: 0, "Out of Stock": -1 }
export const services = {
    "Gym Memberships": 2,
    "Spa & Salon": 1,
    Recreation: 4,
    Dentists: 3,
}























// <Heading
// style={{ marginBottom: "30px" }}
// size='24px'
// weight={theme.font.weight.semiBold}>
// Lorem Ipsum
// </Heading>
// <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
// <Col span={12}>
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "30px",
//     }}>
//     <Heading
//       style={{
//         marginRight: "30px",
//         minWidth: "max-content",
//       }}
//       size='19px'
//       weight={theme.font.weight.regular}>
//       Staff Workers
//     </Heading>
//     <Input
//       style={{
//         padding: "12px 17px",
//         maxWidth: "150px",
//       }}
//       type='primary'
//       placeholder='Capacity'
//       {...set.registerInput("staffWorkers", {
//         validator: validateNumberInput,
//       })}
//     />
//   </div>
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "30px",
//     }}>
//     <Heading
//       style={{
//         marginRight: "30px",
//         minWidth: "max-content",
//       }}
//       size='19px'
//       weight={theme.font.weight.regular}>
//       Specialists For A User
//     </Heading>
//     <Input
//       style={{
//         padding: "12px 17px",
//         maxWidth: "150px",
//       }}
//       type='primary'
//       placeholder='Capacity'
//       {...set.registerInput("specialists", {
//         validator: validateNumberInput,
//       })}
//     />
//   </div>
// </Col>
// <Col span={12}>
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "30px",
//     }}>
//     <Heading
//       style={{
//         marginRight: "30px",
//         minWidth: "max-content",
//       }}
//       size='19px'
//       weight={theme.font.weight.regular}>
//       Users Capacity
//     </Heading>
//     <Input
//       style={{
//         padding: "12px 17px",
//         maxWidth: "150px",
//       }}
//       type='primary'
//       placeholder='Capacity'
//       {...set.registerInput("userCapacity", {
//         validator: validateNumberInput,
//       })}
//     />
//   </div>
// </Col>
// </Row>
// {component % 2 === 0 ? (
// <Row
//   gutter={20}
//   style={{
//     maxWidth: "1092px",
//     marginBottom: "60px",
//   }}>
//   <Col span={12}>
//     <Heading
//       style={{ marginBottom: "30px" }}
//       size='24px'
//       weight={theme.font.weight.semiBold}>
//       Membership Types
//     </Heading>
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//       }}>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e =>
//           set.memberships(["day-pass", e.target.checked])
//         }>
//         Day Pass
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e => {
//           set.memberships(["1week-permit", e.target.checked])
//         }}>
//         1 Week Permit
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e =>
//           set.memberships(["quarter-permit", e.target.checked])
//         }>
//         Quarter Permit
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e =>
//           set.memberships(["half-permit", e.target.checked])
//         }>
//         Half Permit
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e =>
//           set.memberships[("annual-permit", e.target.checked)]
//         }>
//         Annual Permit
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e =>
//           set.memberships[("couple-permit", e.target.checked)]
//         }>
//         Couple Permit
//       </Checkbox>
//       <Checkbox
//         onChange={e =>
//           set.memberships[("family-permit", e.target.checked)]
//         }>
//         Family Permit
//       </Checkbox>
//     </div>
//   </Col>
//   <Col span={12}></Col>
// </Row>
// ) : (
// <Row
//   gutter={20}
//   style={{
//     maxWidth: "1092px",
//     marginBottom: "60px",
//   }}>
//   <Col span={12}>
//     <Heading
//       style={{ marginBottom: "30px" }}
//       size='24px'
//       weight={theme.font.weight.semiBold}>
//       Services Offered
//     </Heading>
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//       }}>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e =>
//           set.servicesOffered(["service-1", e.target.checked])
//         }>
//         Service 1
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e => {
//           set.servicesOffered(["service-2", e.target.checked])
//         }}>
//         Service 2
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e => {
//           set.servicesOffered(["service-3", e.target.checked])
//         }}>
//         Service 3
//       </Checkbox>
//       <Checkbox
//         style={{ marginBottom: "20px" }}
//         onChange={e => {
//           set.servicesOffered(["service-4", e.target.checked])
//         }}>
//         Service 4
//       </Checkbox>
//     </div>
//   </Col>
//   <Col span={12}></Col>
// </Row>
// )}

// {component % 2 === 0 ? (
// <Row
//   gutter={20}
//   style={{
//     maxWidth: "1092px",
//     marginBottom: "60px",
//   }}>
//   <Row span={12}>
//     <Heading
//       style={{ marginBottom: "30px" }}
//       size='24px'
//       weight={theme.font.weight.semiBold}>
//       Trainers
//     </Heading>
//     <FiltersBar onSearchChange={true} type='secondary' />
//     {/* <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                     }}>
//                     <Checkbox
//                         style={{ marginBottom: "20px" }}
//                         onChange={e =>
//                             set.memberships([
//                                 "day-pass",
//                                 e.target.checked,
//                             ])
//                         }>
//                         Day Pass
//                     </Checkbox>
//                     <Checkbox
//                         style={{ marginBottom: "20px" }}
//                         onChange={e => {
//                             set.memberships([
//                                 "1week-permit",
//                                 e.target.checked,
//                             ])
//                         }}>
//                         1 Week Permit
//                     </Checkbox>
//                     <Checkbox
//                         style={{ marginBottom: "20px" }}
//                         onChange={e =>
//                             set.memberships([
//                                 "quarter-permit",
//                                 e.target.checked,
//                             ])
//                         }>
//                         Quarter Permit
//                     </Checkbox>
//                     <Checkbox
//                         style={{ marginBottom: "20px" }}
//                         onChange={e =>
//                             set.memberships([
//                                 "half-permit",
//                                 e.target.checked,
//                             ])
//                         }>
//                         Half Permit
//                     </Checkbox>
//                     <Checkbox
//                         style={{ marginBottom: "20px" }}
//                         onChange={e =>
//                             set.memberships[
//                                 ("annual-permit", e.target.checked)
//                             ]
//                         }>
//                         Annual Permit
//                     </Checkbox>
//                     <Checkbox
//                         style={{ marginBottom: "20px" }}
//                         onChange={e =>
//                             set.memberships[
//                                 ("couple-permit", e.target.checked)
//                             ]
//                         }>
//                         Couple Permit
//                     </Checkbox>
//                     <Checkbox
//                         onChange={e =>
//                             set.memberships[
//                                 ("family-permit", e.target.checked)
//                             ]
//                         }>
//                         Family Permit
//                     </Checkbox>
//                 </div> */}
//   </Row>
//   <Col span={12}></Col>
// </Row>
// ) : null}

// {component % 2 === 0 ? (
// <Col
//   style={{
//     maxWidth: "1092px",
//     marginBottom: "60px",
//   }}>
//   <Row
//     style={{
//       width: "100%",
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//     }}>
//     <Heading
//       style={{ marginBottom: "30px" }}
//       size='24px'
//       weight={theme.font.weight.semiBold}>
//       Trainers
//     </Heading>
//     <SearchBar
//       style={{ width: "100px" }}
//       onSearchChange={s => console.log(s)}
//       placeHolder={"Search Trainer"}></SearchBar>
//   </Row>

//   <Row>
//     <ImageWrapper>
//       <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
//       <p
//         style={{
//           // fontWeight: "bold",
//           color: "#FFFFFF",
//           width: "85px",
//           height: "21px",
//           position: "relative",
//           top: "5px",
//         }}>
//         Faiz Champ
//       </p>
//     </ImageWrapper>
//     <ImageWrapper>
//       <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
//       <p
//         style={{
//           // fontWeight: "bold",
//           color: "#FFFFFF",
//           width: "85px",
//           height: "21px",
//           position: "relative",
//           top: "5px",
//         }}>
//         Faiz Champ
//       </p>
//     </ImageWrapper>
//     <ImageWrapper>
//       <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
//       <p
//         style={{
//           // fontWeight: "bold",
//           color: "#FFFFFF",
//           width: "85px",
//           height: "21px",
//           position: "relative",
//           top: "5px",
//         }}>
//         Faiz Champ
//       </p>
//     </ImageWrapper>
//     <ImageWrapper>
//       <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
//       <p
//         style={{
//           // fontWeight: "bold",
//           color: "#FFFFFF",
//           width: "85px",
//           height: "21px",
//           position: "relative",
//           top: "5px",
//         }}>
//         Faiz Champ
//       </p>
//     </ImageWrapper>
//     <ImageWrapper>
//       <img src='https://media.istockphoto.com/photos/happy-personal-trainer-working-at-the-gym-picture-id852401732?k=20&m=852401732&s=612x612&w=0&h=Qk9lktDsVnKN5AdEZzZYoSMMrMB1s0jJ0WEcBRZEgQU=' />
//       <p
//         style={{
//           // fontWeight: "bold",
//           color: "#FFFFFF",
//           width: "85px",
//           height: "21px",
//           position: "relative",
//           top: "5px",
//         }}>
//         Faiz Champ
//       </p>
//     </ImageWrapper>
//     <ImageWrapper>
//       <div>
//         <PlusIcon
//           onClick={showModal}
//           style={{ marginTop: "30px", marginLeft: "28px" }}
//         />
//         <>
//           <Modal
//             title='Basic Modal'
//             visible={isModalVisible}
//             onOk={handleOk}
//             onCancel={handleCancel}>
//             <Input type='text' />
//             {/* <UploadImages />
//             <p>Some contents...</p> */}
//           </Modal>
//         </>
//       </div>
//       <p
//         style={{
//           // fontWeight: "bold",
//           color: "#FFFFFF",
//           width: "85px",
//           height: "21px",
//           position: "relative",
//           top: "5px",
//           textAlign: "center",
//         }}>
//         Add
//       </p>
//     </ImageWrapper>
//   </Row>
//   <Row></Row>

//   <Col span={12}></Col>
// </Col>
// ) : null}

// <Heading
// style={{ marginBottom: "30px" }}
// size='24px'
// weight={theme.font.weight.semiBold}>
// Facilities
// </Heading>
// <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
// <Col span={12}>
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//     }}>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.facilities(["facility-1", e.target.checked])
//       }>
//       Facility 1
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.facilities(["facility-2", e.target.checked])
//       }>
//       Facility 2
//     </Checkbox>
//     <Checkbox
//       onChange={e =>
//         set.facilities(["facility-3", e.target.checked])
//       }>
//       Facility 3
//     </Checkbox>
//   </div>
// </Col>
// <Col span={12}>
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//     }}>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.facilities(["facility-4", e.target.checked])
//       }>
//       Facility 4
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.facilities(["facility-5", e.target.checked])
//       }>
//       Facility 5
//     </Checkbox>
//     <Checkbox
//       onChange={e =>
//         set.facilities(["facility-6", e.target.checked])
//       }>
//       Facility 6
//     </Checkbox>
//   </div>
// </Col>
// </Row>

// <Heading
// style={{ marginBottom: "30px" }}
// size='24px'
// weight={theme.font.weight.semiBold}>
// Additional Services
// </Heading>
// <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
// <Col span={12}>
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//     }}>
//     <Checkbox style={{ marginBottom: "20px" }}>Service 1</Checkbox>
//     <Checkbox style={{ marginBottom: "20px" }}>Service 2</Checkbox>
//     <Checkbox>Service 3</Checkbox>
//   </div>
// </Col>
// <Col span={12}>
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//     }}>
//     <Checkbox style={{ marginBottom: "20px" }}>Service 4</Checkbox>
//     <Checkbox style={{ marginBottom: "20px" }}>Service 5</Checkbox>
//     <Checkbox>Service 6</Checkbox>
//   </div>
// </Col>
// </Row>

// <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
// <Col span={12}>
//   <Heading
//     style={{ marginBottom: "15px" }}
//     size='24px'
//     weight={theme.font.weight.semiBold}>
//     About The Spot
//   </Heading>
//   <TextArea
//     placeholder='Maximum 400 Word Count Limit'
//     style={{
//       height: "212px",
//       marginBottom: "60px",
//     }}
//     row={12}
//     {...set.registerInput("spot")}
//   />
// </Col>
// <Col span={12}>
//   <Heading
//     style={{ marginBottom: "15px" }}
//     size='24px'
//     weight={theme.font.weight.semiBold}>
//     Service Code
//   </Heading>
//   <Input
//     type='primary'
//     style={{ marginBottom: "60px" }}
//     placeholder='FAIZ-21'
//     {...set.registerInput("code")}
//   />
// </Col>
// </Row>

// <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
// <Col span={12}>
//   <Heading
//     style={{ marginBottom: "30px" }}
//     size='24px'
//     weight={theme.font.weight.semiBold}>
//     Working Hours
//   </Heading>
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//     }}>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.workingHours(["work-sat", e.target.checked])
//       }>
//       Saturday
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.workingHours(["work-sun", e.target.checked])
//       }>
//       Sunday
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.workingHours(["work-mon", e.target.checked])
//       }>
//       Monday
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.workingHours(["work-tue", e.target.checked])
//       }>
//       Tuesday
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.workingHours(["work-wed", e.target.checked])
//       }>
//       Wednesday
//     </Checkbox>
//     <Checkbox
//       style={{ marginBottom: "20px" }}
//       onChange={e =>
//         set.workingHours(["work-thur", e.target.checked])
//       }>
//       Thursday
//     </Checkbox>
//     <Checkbox
//       onChange={e =>
//         set.workingHours(["work-fri", e.target.checked])
//       }>
//       Friday
//     </Checkbox>
//   </div>
// </Col>
// <Col span={12}></Col>
// </Row>

// <Row gutter={20} style={{ maxWidth: "1092px", marginBottom: "60px" }}>
// <Col span={12}>
//   <Heading
//     style={{ marginBottom: "15px" }}
//     size='24px'
//     weight={theme.font.weight.semiBold}>
//     {component % 2 === 0
//       ? "Trainers Schedule"
//       : "Specialist Schedule"}
//   </Heading>
//   <TextArea
//     placeholder='Lorem Ipsum'
//     style={{
//       height: "212px",
//       marginBottom: "60px",
//     }}
//     row={12}
//     {...set.registerInput("schedule")}
//   />
// </Col>
// <Col span={12}>
//   <Heading
//     style={{ marginBottom: "15px" }}
//     size='24px'
//     weight={theme.font.weight.semiBold}>
//     Price
//   </Heading>
//   <Input
//     type='primary'
//     style={{ marginBottom: "60px" }}
//     placeholder='QAR (per/user)'
//     {...set.registerInput("price", {
//       validator: validateFloatInput,
//     })}
//   />
// </Col>
// </Row>

// <div style={{ marginBottom: "60px", maxWidth: "1092px" }}>
// <Heading
//   style={{ marginBottom: "30px" }}
//   size='24px'
//   weight={theme.font.weight.semiBold}>
//   {component % 2 === 0 ? "Trainer Images" : "Specialist Images"}
// </Heading>
// <UploadImages images={trainerImages} setImages={setTrainerImages} />
// </div>
// {component === 3 ? (
// <div
//   style={{
//     marginBottom: "60px",
//     maxWidth: "1092px",
//   }}>
//   <Heading
//     style={{ marginBottom: "30px" }}
//     size='24px'
//     weight={theme.font.weight.semiBold}>
//     Certificate / License
//   </Heading>
//   <UploadImages />
// </div>
// ) : null}