import Image from 'next/image';
import React from 'react'
import { makeStyles } from "@material-ui/core";

interface BusinessCardProps {
    item: any;
}

export default function BusinessCard({ item }: BusinessCardProps) {
    const styles = useStyles();

    return (
        <div className="col-lg-4 col-md-6 col-sm-9 col-11 mx-auto my-2">
            {/* <div className=''></div> */}
            <div className="shadow-md p-4 rounded bg-white">
                <div className='row'>
                    <div className='col-md-9' style={titleStyles}>{item?.title}</div>
                    <a className='col-md-3' style={viewAllBtn}>View all</a>
                </div>

                <Image className={`image-fluid col-xl-8 col-lg-6 col-md-8 col-sm-4 col-6 mx-auto p-3 ${styles.productImage}`}
                    src={item?.image}
                    alt="Listing" width={200} height={447}
                />

                <div className='d-flex mx-auto'>
                    {item?.subImages?.map((itm: any, indx: number) => {
                        return (
                            <div key={itm}>
                                <Image className="mx-4" key={indx}
                                    src={itm?.img}
                                    alt="Listing" width={68} height={68}
                                    style={{ width: "68px", height: "68px" }}
                                />
                                <div style={nameStyles} className='mx-auto mt-2'>
                                    {itm?.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

const titleStyles: React.CSSProperties | undefined = {
    fontSize: "20px",
    color: "#000",
    fontWeight: "700",
}

const viewAllBtn: React.CSSProperties | undefined = {
    fontSize: "12px",
    color: "#000",
    fontWeight: "500",
    textAlign: "right",
    marginTop: "5px"
}

const nameStyles: React.CSSProperties | undefined = {
    fontSize: "12px",
    color: "#000",
    fontWeight: "500",
    textAlign: "center",
    width: "80px"
}

const useStyles = makeStyles((theme) => ({
    productImage: {
        [theme.breakpoints.down("xs")]: {
            width: "100%", height: "280px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "100%", height: "247px"
        },
        "@media (min-width: 1280px)": {
            width: "100%", height: "360px"
        }
    }
}));
