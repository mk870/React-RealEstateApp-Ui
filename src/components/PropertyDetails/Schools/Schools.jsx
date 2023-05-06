import React from "react";
import { MdOutlineSchool } from "react-icons/md";
import * as styled from "./SchoolStyles";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { GiPathDistance, GiStairs, GiTeacher } from "react-icons/gi";
import { useSelector } from "react-redux";
import { mainThemeColor } from "Css/Variables";
import { FaMoneyBillAlt, FaGraduationCap } from "react-icons/fa";

const Schools = ({ property }) => {
  const screenSize = useSelector((state) => state.screenSize.value);
  const iconSize = screenSize > 600 ? 26 : 20;
  const iconStyles = () => {
    return {
      padding: "5px",
      borderRadius: "100%",
      background: "rgba(71,91,232,0.1)",
      color: mainThemeColor,
    };
  };
  const nullChecker = (value) => {
    if (value) return value;
    else return "not available";
  };
  const listFormater = (list) => {
    if (!list || list < 1) {
      return "not available";
    } else {
      if (list.length === 1) return list[0];
      else {
        let listString = "";
        list.forEach((item, index) => {
          if (index === list.length - 1) {
            listString += item;
          } else {
            listString += item + ", ";
          }
        });
        return listString;
      }
    }
  };
  const getRating = (rating) => {
    if (rating) {
      let stars = Array(rating).fill(
        <AiFillStar size={12} color="gold" />
      );
      return stars;
    } else return "not available";
  };
  return (
    <styled.container>
      {property?.schools?.total > 0 ? (
        <styled.grid>
          {property.schools.schools.map((school) => (
            <styled.school key={school.id}>
              <styled.attribute>
                <MdOutlineSchool size={iconSize} style={iconStyles()} />
                <styled.title>
                  Name: <span className="attribute_value">{school.name}</span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <FaMoneyBillAlt size={iconSize} style={iconStyles()} />
                <styled.title>
                  Funding Type:{" "}
                  <span className="attribute_value">
                    {nullChecker(school.funding_type)}
                  </span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <GiStairs size={iconSize} style={iconStyles()} />
                <styled.title>
                  Education Levels:{" "}
                  <span className="attribute_value">
                    {listFormater(school.education_levels)}
                  </span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <FaGraduationCap size={iconSize} style={iconStyles()} />
                <styled.title>
                  Grades:{" "}
                  <span className="attribute_value">
                    {listFormater(school.grades)}
                  </span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <AiFillStar size={iconSize} style={iconStyles()} />
                <styled.title>
                  Rating:{" "}
                  <span className="attribute_value">
                    {getRating(school.rating) === "not available"
                      ? "not avaailable"
                      : getRating(school.rating).map((star, index) => (
                          <div
                            className="star"
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                              justifyContent: "start",
                            }}
                          >
                            {star}
                          </div>
                        ))}
                  </span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <HiOutlineUserGroup size={iconSize} style={iconStyles()} />
                <styled.title>
                  Student Count:{" "}
                  <span className="attribute_value">
                    {nullChecker(school.student_count)}
                  </span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <GiTeacher size={iconSize} style={iconStyles()} />
                <styled.title>
                  Teachers Student ratio:{" "}
                  <span className="attribute_value">
                    {nullChecker(school.student_teacher_ratio)}
                  </span>
                </styled.title>
              </styled.attribute>
              <styled.attribute>
                <GiPathDistance size={iconSize} style={iconStyles()} />
                <styled.title>
                  Distance(Miles):{" "}
                  <span className="attribute_value">
                    {nullChecker(school.distance_in_miles)}
                  </span>
                </styled.title>
              </styled.attribute>
            </styled.school>
          ))}
        </styled.grid>
      ) : (
        <styled.title>No schools available</styled.title>
      )}
    </styled.container>
  );
};

export default Schools;
