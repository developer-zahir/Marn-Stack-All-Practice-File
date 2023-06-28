let team_section = document.querySelector("#team-section");
team_members_data.map((tem_member, index) => {
    team_section.innerHTML += `
  <div class="col-lg-3">
  <!-- team item -->
  <div class="tema-item">
  <div class="team-item-inner p-3">
   <div class="tem-iamge mb-4">
     <img class="" src="${tem_member.image}" alt="" />
   </div>
   <div class="team-content">
     <h2>${tem_member.name}</h2>
     <p class="mt-3">
        ${tem_member.about}
     </p>
   </div>

   <div class="team-social">
     <ul class="p-0 m-0 d-flex justify-content-center mt-4">
       <li>
         <a href="${tem_member.facebook}"><i class="fa-brands fa-square-facebook"></i></a>
       </li>
       <li>
         <a href="${tem_member.instagram}"><i class="fa-brands fa-instagram"></i></a>
       </li>
       <li>
         <a href="${tem_member.linkeding}"><i class="fa-brands fa-linkedin"></i></a>
       </li>
       <li>
         <a href="${tem_member.twitter}"><i class="fa-brands fa-square-twitter"></i></a>
       </li>
     </ul>
   </div>
 </div>
 </div>
 </div>
 
 `;
});
