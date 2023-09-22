// import React from 'react';

const CategoryList = () => {
        return (
                <div className="my-32 container mx-auto">
                        <h2 className="text-5xl font-extrabold text-center text-black">Job category List</h2>
                        <p className="text-[rgb(117,117,117)] text-center font-medium mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                                <div className="header-background p-10 rounded-lg">
                                        <div className="header-background p-4 w-20 rounded-lg">
                                        <img src="/src/assets/icons/accounts.png" alt="" />
                                        </div>
                                        <h2 className="txt-black font-extrabold text-lg mt-5">Account & Finance</h2>
                                        <p className="text-[#A3A3A3] font-md">300 Jobs Available</p>
                                </div>
                                <div className="header-background p-10 rounded-lg">
                                        <div className="header-background p-4 w-20 rounded-lg">
                                        <img src="/src/assets/icons/creative.png" alt=""  />
                                        </div>
                                        <h2 className="txt-black font-extrabold text-lg mt-5">Creative Design</h2>
                                        <p className="text-[#A3A3A3] font-md">200 Jobs Available</p>
                                </div>
                                <div className="header-background p-10 rounded-lg">
                                        <div className="header-background p-4 w-20 rounded-lg">
                                        <img src="/src/assets/icons/marketing.png" alt="" />
                                        </div>
                                        <h2 className="txt-black font-extrabold text-lg mt-5">Marketing & Sales</h2>
                                        <p className="text-[#A3A3A3] font-md">340 Jobs Available</p>
                                </div>
                                <div className="header-background p-10 rounded-lg">
                                        <div className="header-background p-4 w-20 rounded-lg">
                                        <img src="/src/assets/icons/chip.png" alt="" />
                                        </div>
                                        <h2 className="txt-black font-extrabold text-lg  mt-5">Engineering Job</h2>
                                        <p className="text-[#A3A3A3] font-md">900 Jobs Available</p>
                                </div>
                                
        
                        </div>
                </div>
        );
};

export default CategoryList;