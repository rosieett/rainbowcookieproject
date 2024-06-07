 <div id="bakerypage-template">
        <div class="bakery-profile">
          <div class="bakery-hed">
            <h2 class="bakeryhed">{{bakeryhed}}</h2>
            <p class="bakeryaddress">{{bakeryaddress}}</p>
          </div>

          <div class="bakery-subhed">
            <div class="bakery-callout">
              <h3 class="subhead"> {{subhead-rank}}</h3>
              <p class="callout"> {{ranking}}</p>
            </div>
            <div class="bakery-callout">
              <h3 class="subhead"> {{subhead-price}}</h3>
              <p class="callout"> {{price}}</p>
            </div>
            <div class="bakery-notes">
              <h3 class="subhead"> {{subhead-desc}}</h3>
              <p class="para-text"> {{bakery-desc}}</p>
            </div>
          </div>

          <div class="bakery-main">
            <div class="overall">
              <div class="bakery-scores">
                <h3 class="area-hed"> {{score-hed}}</h3>
                <div class="scores">
                  <!-- chart with scores  -->
                  {{chart}}
                </div>
              </div>
              <div class="bakery-imagenotes">
                <img src="" alt="" class="img-cookie" />
                <p class="img-notes">
                  <!-- annotations for the image -->
                </p>
              </div>
              <div class="bakery-notes">
                <h3 class="callout"> {{comment-hed}}</h3>
                <p class="para-text"> {{cookie-notes}}</p>
              </div>
            </div>

            <div class="section-scores">
              <div class="scores">
                <h4 class="area-hed"> {{taster-Mattie}}</h4>
                <p class="taster-subhed"> {{taster-MB-title}}</p>
                <div class="scores">
                  <!-- chart with scores  -->
                  {{chart}}
                </div>
              </div>

              <div class="scores">
                <h4 class="area-hed"> {{taster-Tracy}}</h4>
                <p class="taster-subhed"> {{taster-TM-title}}</p>
                <div class="scores">
                  <!-- chart with scores  -->
                  {{chart}}
                </div>
              </div>

              <div class="scores">
                <h4 class="area-hed"> {{taster-Ken}}</h4>
                <p class="taster-subhed"> {{taster-JF-title}}</p>
                <div class="scores">
                  <!-- chart with scores  -->
                  {{chart}}
                </div>
              </div>

              <div class="scores">
                <h4 class="area-hed"> {{taster-Rosie}}</h4>
                <p class="taster-subhed"> {{taster-RE-title}}</p>
                <div class="scores">
                  <!-- chart with scores  -->
                  {{chart}}
                </div>
              </div>
            </div>
          </div>

          <div class="close-buttons"></div>

        </div>
      </div>