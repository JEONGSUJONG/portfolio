import React from "react";
import * as ST from "./style";

const Contact = () => {
  return (
    <>
      <ST.Title>CONTACT</ST.Title>
      <ST.ContactContainer>
        <ST.Table>
          <tbody>
            <tr>
              <td>
                <span>Email</span>
              </td>
              <td>
                <ST.Link
                  href="mailto:jeon95ujong@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jeon95ujong@gmail.com
                </ST.Link>
              </td>
            </tr>
            <tr>
              <td>
                <span>Github</span>
              </td>
              <td>
                <ST.Link
                  href="https://github.com/JEONGSUJONG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/JEONGSUJONG
                </ST.Link>
              </td>
            </tr>
            <tr>
              <td>
                <span>Blog</span>
              </td>
              <td>
                <ST.Link
                  href="https://jeongsujong.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://jeongsujong.github.io/
                </ST.Link>
              </td>
            </tr>
            <tr>
              <td>
                <span>Address</span>
              </td>
              <td>서울특별시 관악구 봉천동</td>
            </tr>
            <tr>
              <td>
                <span>Birth</span>
              </td>
              <td>1997 . 12 . 28</td>
            </tr>
          </tbody>
        </ST.Table>
      </ST.ContactContainer>
    </>
  );
};

export default Contact;
