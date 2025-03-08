import React from "react";

import OMOcloud from "#/data/OMOcloud.json";

import styles from './index.module.scss';

const members = OMOcloud.members;

interface MemberBannerTypes{
    username: String
}


const MemberBanner =({username}: MemberBannerTypes)=>{

    const member = members.find(index => index.username == username)

    return(
        <div className={styles.MemberBanner}>
          <p>{member?.name}</p>
        </div>
    )

}

export default MemberBanner;