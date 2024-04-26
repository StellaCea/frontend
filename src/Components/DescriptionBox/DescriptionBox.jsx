import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laborum eveniet illum delectus facere cum beatae a, aliquam quidem commodi deleniti ab esse officia architecto, sit dicta reiciendis maxime dignissimos!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure exercitationem, similique fuga, placeat esse, saepe cum earum rem veritatis deserunt et delectus quas fugit?</p>
            </div>
        </div>
    )
}
