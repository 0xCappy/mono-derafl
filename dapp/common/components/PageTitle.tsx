import Link from 'next/link';
import React from 'react';

interface PageTitleProps {
   breadcrumbTitle: string
   breadcrumbSubTitle?: string
}

const PageTitle = ({ breadcrumbTitle, breadcrumbSubTitle }: PageTitleProps) => {
   return (
      <section className="page-title-area">
         <div className="container">
            <div className="row wow fadeInUp">
               <div className="col-lg-12">
                  <div className="page-title">
                     <h2 className="breadcrumb-title mb-10">{breadcrumbTitle}</h2>
                     {breadcrumbSubTitle &&
                        <div className="breadcrumb-menu">
                           <nav className="breadcrumb-trail breadcrumbs">
                              <ul className="trail-items">
                                 <li className="trail-item trail-end"><span>{breadcrumbSubTitle}</span></li>
                              </ul>
                           </nav>
                        </div>
                     }
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PageTitle