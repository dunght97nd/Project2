import React from 'react'
import CastGrid from '../../components/cast-grid/CastGrid';

import PageHeader from '../../components/page-header/PageHeader'

// import { TabTitle } from '../../ultils/GeneralFunctions';

const Casts = () => {
    const category = window.location.pathname.split('/')[1]
    console.log(window.location.pathname.split('/'));
    return (
        <>
            <PageHeader>
                {category}
            </PageHeader>

            <div className="container">
                <div className="section mb-3">
                    <CastGrid category={category} />
                </div>
            </div>
        </>
    )
}

export default Casts