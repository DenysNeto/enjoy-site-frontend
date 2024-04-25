Ractive.DEBUG = false;
Ractive.defaults.data = {
  translateFunc: (page, index, currLanguage) => {
    let translationLanguage = undefined;
    if (currLanguage.includes("uk")) {
      translationLanguage = "ukr";
    } else if (currLanguage.includes("pl") || currLanguage.includes("pol")) {
      translationLanguage = "pol";
    } else if (currLanguage.includes("ru")) {
      translationLanguage = "rus";
    } else if (currLanguage.includes("en")) {
      translationLanguage = "eng";
    }
    return window.translate[page][translationLanguage][index];
  },
};

Ractive.components["button-c"] = Ractive.extend({
  template: `
         
		<a   href="{{link}}" style={{style}} class="  animate__slower button {{classes}} {{isPrimary ? 'primary' : ''}} ">{{label || translateFunc('general' ,  1 , @global.translationLanguage) }}</a>
`,
  data: {
    fields: [
      {
        link: "#",
        classes: "",
        isPrimary: true,
        isAnimate: true,
      },
    ],
  },
});

Ractive.components["menu-c"] = Ractive.extend({
  template: ` 

  <div id="menu-btn" on-click="@.clickOpenForm(@event)" class="animate__animated animate__heartBeat  animate__slower animate__infinite"  style="    /* width: 50px; */
    position: fixed;
    /* height: 50px; */
    z-index: 10000000;
    background: white;
    right: 2rem;
    bottom: 2rem;
    padding: 25px;
    border: 2px solid black;
    border-radius: 76px;"><i class="textEmblema" style="font-size: 5rem" class="fas fa-comment"></i> </div>

                <modal isOpenBtnVisible=false closeCallback={{@.closeModalCallback}} label={{translateFunc('general' ,  30, @global.translationLanguage)}}>
               {{#if isDone}}
                  <h2 style="text-align: center;" class="textEmblema"> Форма успешно отправлена </h2>
                  <div style="display:flex;justify-content:center">
                    <i style="font-size: 8rem;"  class="far fa-check-circle textEmblema"></i>
                  </div>
                  <button-action  style="width:100%;margin-top:3rem" action={{@global.closeModal}} label="OK"/>
               {{else}}
                	  <h2 style="text-align: center;" class="textEmblema"> {{translateFunc('general' ,  30, @global.translationLanguage)}} </h2>
                  <communication-form submitCallback={{@.callback}}/>
                  <ul style="display: flex;justify-content: center;" class="icons">
                    <brands-c/>
                  </ul>
               {{/if}}
              </modal> 
    `,
  callback() {
    this.set("isDone", true);
  },
  closeModalCallback() {
    this.set("isDone", false);
  },
  clickOpenForm(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    window.toggleModal();
  },
  data: { isDone: false },
});

Ractive.components["ask-question-mobile"] = Ractive.extend({
  template: ` 
               <modal isOpenBtnVisible=false closeCallback={{@.closeModalCallback}} label={{translateFunc('general' ,  30, @global.translationLanguage)}}>
               {{#if isDone}}
                  <h2 style="text-align: center;" class="textEmblema"> Форма успешно отправлена </h2>
                  <div style="display:flex;justify-content:center">
                    <i style="font-size: 8rem;"  class="far fa-check-circle textEmblema"></i>
                  </div>
                  <button-action  style="width:100%;margin-top:3rem" action={{@global.closeModal}} label="OK"/>
               {{else}}
                	  <h2 style="text-align: center;" class="textEmblema"> {{translateFunc('general' ,  30, @global.translationLanguage)}} </h2>
                  <communication-form submitCallback={{@.callback}}/>
                  <ul style="display: flex;justify-content: center;" class="icons">
                    <brands-c/>
                  </ul>
               {{/if}}
              </modal>
    `,

  callback() {
    this.set("isDone", true);
  },
  closeModalCallback() {
    this.set("isDone", false);
  },

  data: { isDone: false },
});

Ractive.components["ask-question"] = Ractive.extend({
  template: ` 
  
        <section style="height:50vh" class="spotlight style3 right">
      		<span class="image fit main bottom"><img
      				src="./assets/custom/photos/other/question-mark-1872665_1280.jpg" alt="" /></span>
      		<div class="content">
      			<section>
      				<header class="major">
      					<h2 class="textEmblema" > {{translateFunc('general' ,  28, @global.translationLanguage)}} </h2>
      					<h3 class="textEmblema" > {{translateFunc('general' ,  29, @global.translationLanguage)}}</h3>
      				</header>

             <modal closeCallback={{@.closeModalCallback}} label={{translateFunc('general' ,  30, @global.translationLanguage)}}>
               {{#if isDone}}
                  <h2 style="text-align: center;" class="textEmblema"> Форма успешно отправлена </h2>
                  <div style="display:flex;justify-content:center">
                    <i style="font-size: 8rem;"  class="far fa-check-circle textEmblema"></i>
                  </div>
                  <button-action  style="width:100%;margin-top:3rem" action={{@global.closeModal}} label="OK"/>
               {{else}}
                	  <h2 style="text-align: center;" class="textEmblema"> {{translateFunc('general' ,  30, @global.translationLanguage)}} </h2>
                  <communication-form submitCallback={{@.callback}}/>
                  <ul style="display: flex;justify-content: center;" class="icons">
                    <brands-c/>
                  </ul>
               {{/if}}
              
              </modal> 
      		</div>
      	</section>`,

  callback() {
    this.set("isDone", true);
  },
  closeModalCallback() {
    this.set("isDone", false);
  },

  data: { isDone: false },
});

Ractive.components["button-back"] = Ractive.extend({
  template: `
      {{#if 2==2 ||  @global.document.referrer != ""  && @global.document.referrer != @global.location.href  }}   
		<a  on-click="@.click(@event)"     style="margin:1rem;{{style}}" class=" btn-back animate__slower button {{classes}} {{isPrimary ? 'primary' : ''}} "> {{label ||  translateFunc('general' ,  15, @global.translationLanguage) }}</a>
    {{/if}}
`,
  click(i) {
    i.preventDefault();

    window.history.back();
  },
  data: {
    fields: [
      {
        classes: "",
        isPrimary: true,
        isAnimate: true,
        label: "Записаться",
      },
    ],
  },
});

Ractive.components["button-action"] = Ractive.extend({
  template: `
		<a on-click="@.click(@event)"     style="margin:1rem;{{style}}" class=" animate__slower button {{classes}} {{isPrimary ? 'primary' : ''}} "> {{label || "Назад"}}</a>
`,
  click(i) {
    i.preventDefault();
    if (this.get("action")) {
      this.get("action")();
    }
  },
  data: {
    action: () => {},
    label: "Some label",
  },
});

Ractive.components["communication-form"] = Ractive.extend({
  template: `<form style="padding:10px" id="myForm"  action="http://localhost:8000/submit" >
        <div class="">
          <div style="padding-bottom: 10px;">
          <label class="textEmblema" >{{translateFunc('general' ,  101, @global.translationLanguage)}}</label>
            <input
            required
              type="text"
              name="name"
              id="name"
              value=""
              placeholder={{translateFunc('general' ,  101, @global.translationLanguage)}}
            />
          </div>
            <div style="padding-bottom: 10px;">
            <label class="textEmblema" >{{translateFunc('general' ,  102, @global.translationLanguage)}}</label>
            <input
            required
              type="text"
              name="lastName"
              value=""
              placeholder={{translateFunc('general' ,  102, @global.translationLanguage)}}
            />
          </div>
          <div style="padding-bottom: 10px;">
            <label class="textEmblema" >{{translateFunc('general' ,  103, @global.translationLanguage)}}</label>
            <input
              required
              type="text"
              type="number"
              name="tel"
              value=""
              placeholder={{translateFunc('general' ,  103, @global.translationLanguage)}}
            />
          </div>
          <div style="padding-bottom: 10px;">
          <label class="textEmblema" >Email</label>
            <input
              type="text"
              name="email"
              value=""
              placeholder="Email"
            />
          </div>

          <div style="padding-bottom: 10px;">
            <label class="textEmblema" for="pet-select">{{translateFunc('general' ,  104, @global.translationLanguage)}}</label>
            <select style="max-width:90%" name="reason">
              <option value="">--{{translateFunc('general' ,  104, @global.translationLanguage)}}--</option>
              <option value="zapis">{{translateFunc('general' ,  105, @global.translationLanguage)}}</option>
              <option value="konsultation">{{translateFunc('general' ,  106, @global.translationLanguage)}}</option>
              <option value="productia">{{translateFunc('general' ,  107, @global.translationLanguage)}}</option>
              <option value="obuchenie">{{translateFunc('general' ,  108, @global.translationLanguage)}}</option>
              <option value="drugoe">{{translateFunc('general' ,  109, @global.translationLanguage)}}</option>
            </select>
          </div>

      <label class="textEmblema"  for="pet-select">{{translateFunc('general' ,  110, @global.translationLanguage)}}</label>
      <textarea placeholder={{translateFunc('general' ,  110, @global.translationLanguage)}}  name="additionalMessage" rows="5" cols="33">

      </textarea>
      <button style="margin-top:20px" on-click="@.click(@event)" style="width:100%" class="button primary" type="submit"> {{translateFunc('general' ,  111, @global.translationLanguage)}} </button>

        </div>
      </form>`,

  click(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.send(formData);
    if (this.get("submitCallback")) {
      this.get("submitCallback")();
    }
    // Optionally, handle the response from the server here
  },
  data: {},
});

Ractive.components["modal-template"] = Ractive.extend({
  template: `
   {{#if isOpenBtnVisible}}
   <a on-click="@.openBtnClick(@event)"  class="trigger"  style=" width:100%; {{style}} " class=" animate__slower button {{classes}} {{isPrimary ? 'primary' : ''}} "> {{label || "Назад"}}</a>
   {{/if}} 
    {{#if isVissible}}
      <div   class="modal-template">
          <div  on-click="@.contentClick(@event)" style="background: #272833; border:1px solid" class="modal-content">
          <i on-click="@.closeBtnClick(@event)" style="position: fixed;
    right: 40px;" class="fas fa-times"></i>
              {{yield}}
          </div>
      </div>
    {{/if}}  
    <style>

.modal-template {
    position: fixed;
    /* top: 50%; */
    /* max-height: 60rem; */
    /* overflow-y: scroll; */
    top: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    /* background-color: rgba(0, 0, 0, 0.5); */
    width: 100%;
    /* max-width: 600px; */
    padding: 20px;
    border-radius: 5px;
    max-height: 80%;
    height: 80%;
}
.modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 90%;
    heigth:500px;
    border-radius: 0.5rem;
    background: #272833;
    border: 1px solid;
    max-height: 100%;
    overflow-y: scroll;
    
}
.close-button {
 .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: white;
    color: black;
    border: 1px solid black;
}
}
.close-button:hover {
    background-color: darkgray;
}

    </style>

`,
  openBtnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.set("isVissible", true);
    let modals = this.findAll(".modal-template");
    modals.forEach((modal) => window.document.body.appendChild(modal));
  },

  closeBtnClick(event) {
    event.stopPropagation();
    this.set("isVissible", false);
    if (this.get("closeCallback")) {
      this.get("closeCallback")();
    }
  },

  contentClick(event) {
    event.preventDefault();
    event.stopPropagation();
  },

  oncomplete() {
    // var trigger = document.querySelector(".trigger");
    var self = this;
    window.modalInstanceTemplate = this;

    function toggleModalTemplate() {
      self.set("isVissible", true);
      let modals = self.findAll(".modal-template");
      modals.forEach((modal) => window.document.body.appendChild(modal));
      if (self.get("callback")) {
        self.get("callback")();
      }
    }

    function windowOnClickTemplate(event) {
      self.set("isVissible", false);
      // if (self.get("closeCallback")) {
      //   self.get("closeCallback")();
      // }
    }

    window.toggleModalTemplate = toggleModalTemplate;
    window.closeModalTemplate = windowOnClickTemplate;

    // trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClickTemplate);
  },

  data: {
    label: "Some label",
    isOpenBtnVisible: true,
  },
});

Ractive.components["modal"] = Ractive.extend({
  template: `
   {{#if isOpenBtnVisible}}
   <a on-click="@.openBtnClick(@event)"  class="trigger"  style=" width:100%; {{style}} " class=" animate__slower button {{classes}} {{isPrimary ? 'primary' : ''}} "> {{label || "Назад"}}</a>
   {{/if}} 
    {{#if isVissible}}
      <div   class="modal">
          <div  on-click="@.contentClick(@event)" style="background: #272833; border:1px solid" class="modal-content">
          <i on-click="@.closeBtnClick(@event)" style="position: fixed;
    right: 40px;" class="fas fa-times"></i>
              {{yield}}
          </div>
      </div>
    {{/if}}  
    <style>

.modal {
    position: fixed;
    /* top: 50%; */
    /* max-height: 60rem; */
    /* overflow-y: scroll; */
    top: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    /* background-color: rgba(0, 0, 0, 0.5); */
    width: 80%;
    /* max-width: 600px; */
    padding: 20px;
    border-radius: 5px;
    max-height: 80%;
    height: 80%;
}
.modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 90%;
    heigth:500px;
    border-radius: 0.5rem;
    background: #272833;
    border: 1px solid;
    max-height: 100%;
    overflow-y: scroll;
    padding: 50px;
}
.close-button {
 .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: white;
    color: black;
    border: 1px solid black;
}
}
.close-button:hover {
    background-color: darkgray;
}

    </style>

`,
  openBtnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.set("isVissible", true);
    let modals = this.findAll(".modal");
    modals.forEach((modal) => window.document.body.appendChild(modal));
  },

  closeBtnClick(event) {
    event.stopPropagation();
    this.set("isVissible", false);
    if (this.get("closeCallback")) {
      this.get("closeCallback")();
    }
  },

  contentClick(event) {
    event.preventDefault();
    event.stopPropagation();
  },

  oncomplete() {
    // var trigger = document.querySelector(".trigger");
    var self = this;
    window.modalInstance = this;

    function toggleModal() {
      self.set("isVissible", true);
      let modals = self.findAll(".modal");
      modals.forEach((modal) => window.document.body.appendChild(modal));
      if (self.get("callback")) {
        self.get("callback")();
      }
    }

    function windowOnClick(event) {
      self.set("isVissible", false);
      if (self.get("closeCallback")) {
        self.get("closeCallback")();
      }
    }

    window.toggleModal = toggleModal;
    window.closeModal = windowOnClick;

    // trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
  },

  data: {
    label: "Some label",
    isOpenBtnVisible: true,
  },
});

Ractive.components["list-c"] = Ractive.extend({
  template: `

                  <h3 class="textEmblema"    style="color: rgba(255, 223, 0, 0.8)">✔ {{header}} </h3>
                  <p  >
                     {{text}}
                  </p>
                  <hr/>`,
  data: {
    items: [{ header: "TITLE", text: "CONTENTTTT" }],
  },
});

Ractive.components["tabs-c"] = Ractive.extend({
  template: `

                                    <div class="faq-content">
                                      {{#each items}}
                                      				<div   class="faq-question ">
                      												  <input on-change= "@.click(@event)" id="q{{@index}}" type="checkbox" class="panel">
                      												  <label class="textEmblema"  style="font-size: 1.5em; padding: 0;
    line-height: 1em;
    letter-spacing: -0.025em;" for="q{{@index}}" class="panel-title"> 
    


    
{{#if @this.get("q" + @index + "_isOpen")}}
   <i    style="color: rgba(255, 223, 0, 0.8) !important; padding-right:30px;"
                                                class="fas fa-minus-circle"></i>

{{else}}  

   
    <i     style="color: rgba(255, 223, 0, 0.8) !important; padding-right:30px;"
                                                class="fas fa-plus-circle"></i> 

{{/if}}
 {{this.title}}</label>
 

                                                <hr/>
                      												<div   class="panel-content">{{>{template : this.content }}}</div>
                      											</div>
                                      {{/each}}
                      						</div>`,
  data: {
    items: [{ title: "TITLE", content: "CONTENTTTT" }],
  },
  bla(id) {
    return document.getElementById("q" + id).getAttribute("checked");
  },
  click(ev) {
    let id = ev.target.id;
    this.set(id + "_isOpen", !this.get(id + "_isOpen"));
  },
});

Ractive.components["image-c"] = Ractive.extend({
  template: `
  <div  {{#if animation != ''}} animation="{{animation}}"  {{/if}}  {{#if class!=''}} class="{{class}}"   {{/if}}   class="animate__animated "  style="width:20rem; display:flex;flex-direction:column;  align-items:center">
    <i class="textEmblema" style="color: rgba(255, 223, 0, 0.8) !important;font-size:6rem;padding: 30px;font-size:6rem;"
    class="{{imgClass}} "></i>

    <h3 style="text-align:center;padding-top:20px">{{header}}</h3>
   
  <p style="text-align:center">{{content}}</p>
  </div>
`,
  data: {
    animation: "",
    class: "",
    imgClass: "",
    header: "",
    content: "",
  },
});

Ractive.components["range-input"] = Ractive.extend({
  template: `     <div style="
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:100px
">
        <h3 class="textEmblema"   id="rangeText">{{label}}</h3>
        <h3 class="textEmblema"   id="rangeValue">{{value}}   {{#if currency != 'no'}} PLN {{/if}}</h3>
        <input name={{name}} class="range" type="range"  value={{value}} min={{min}} max={{max}}  >
    </div>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
}

#rangeText {
  position: relative;
  display: block;
  text-align: center;
  color: #999;
 
}

#rangeValue {
  position: relative;
  display: block;
  text-align: center;
}


.range {
  width: 100%;
  height: 15px;
  -webkit-appearance: none;
  background: #111;
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
  background: linear-gradient(
    to right,
    #a27637 0%,
    10.309278219938278%,
    #bd9e5d 20.618556439876556%,
    24.398625642061234%,
    #e3d688 28.17869484424591%,
    42.78350621461868%,
    #a07237 57.388317584991455%,
    65.12027680873871%,
    #bb9c59 72.85223603248596%,
    86.42611801624298%,
    #eee393 100%
  )
}
.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(255, 223, 0, 0.8);
  cursor: pointer;
  border: 4px solid #333;
  box-shadow: -4007px 0 0 4000px rgba(255, 223, 0, 0.8);
}

    </style>`,

  data: { value: 0, min: 0, max: 1000, label: "Some Text" },
});

Ractive.components["footer-c"] = Ractive.extend({
  template: `        
			<footer id="footer">
      <div class="row">
        <div class="col-4 col-12-medium">
        

        
            <h4 class="textEmblema" style="color: #e44c65"  onclick="window.open('https://www.google.com/maps/place/Norberta+Barlickiego+11,+44-100+Gliwice/@50.297285,18.6539295,14.6z/data=!4m6!3m5!1s0x471130567971af3d:0xa25b51d64f85e287!8m2!3d50.2978397!4d18.6723392!16s%2Fg%2F11c1zdgs4w?entry=ttu');"  style="border-bottom: none;"  style="padding-left:20px">
            Gliwice, Norberta Barlickiego 11 
          </h4>
        </div>

        <div class="col-4 col-12-medium">
          <ul class="icons">
           <brands-c/>
          </ul>
        </div>




        <div class="col-4 col-12-medium">
                <h4 class="textEmblema" >
    <span  onclick="window.open('https://mail.google.com/mail/u/0/?fs=1&to=enjoy@epil.com&tf=cm');"    style="color: #e44c65">Email : enjoy@epil.com </span> <br />     <span style="color: #e44c65" onclick="window.open('tel:+48792437583');"> Tel : +48 888 777 333 </span></h4>
        </div>
      </div>


<div class="col-12 col-12-medium">


 <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;"
 class="mapouter">
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Norberta Barlickiego 11,Gliwice&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe
        ><a href="https://embed-googlemap.com">google maps code generator</a>
      </div>
      <style>
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          border:1px solid  gold;
       
          overflow: hidden;
          background: none !important;
          width: 90%;
          height: 400px;
        }
        .gmap_iframe {
          height: 400px !important;
        }
      </style>
    </div>
    

    <div style="
    margin-top: 5rem;
">
      <a style="border-bottom: none; padding-top:10px"  href="./index.html"><img  style="width:4rem" src="./assets/custom/logo_LAST.png" alt="" /></a>
    </div>
    
            
      

</div>




    </footer>

`,
  data: {},
});

Ractive.components["brands-c"] = Ractive.extend({
  template: `      <li>
        <a   target="_blank" href="{{@this.generateInstagram()}}"  class="icon brands  fa-instagram">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a   target="_blank" href="{{@this.generateFacebook()}}" class="icon brands  fa-facebook-f">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a  target="_blank" href="{{@this.generateTelegram()}}"  class="icon brands  fa-telegram">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a  target="_blank" href="{{@this.generateWhatsapp()}}" class="icon brands  fa-whatsapp">
          <span class="label"></span>
        </a>
      </li> `,

  generateWhatsapp() {
    // Specify the phone number and message (optional)
    var phoneNumber = "+48790213083";
    var message = "";

    // Generate the WhatsApp link
    var whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect to WhatsApp
    return whatsappLink;
  },
  generateFacebook() {
    // Specify the Facebook username or user ID (or use the full profile URL)
    var usernameOrUserId = "facebookusername"; // Replace with the actual Facebook username or user ID

    // Generate the Facebook link
    var facebookLink = "https://www.facebook.com/" + usernameOrUserId;

    // Redirect to Facebook
    return facebookLink;
  },

  generateTelegram() {
    // Specify the username or phone number (with country code) and message (optional)
    var usernameOrPhone = "+48790213083"; // Replace with the actual username or phone number
    var message = "";

    // Generate the Telegram link
    var telegramLink = "https://t.me/" + usernameOrPhone;
    if (message) {
      telegramLink += "?text=" + encodeURIComponent(message);
    }

    return telegramLink;
  },

  generateInstagram() {
    // Specify the Instagram username
    var username = "enjoy.epil.pl"; // Replace with the actual Instagram username

    // Generate the Instagram link
    var instagramLink = "https://www.instagram.com/" + username;

    // Redirect to Instagram
    return instagramLink;
  },
});

Ractive.components["nav-touch-c"] = Ractive.extend({
  template: `

 
  <div  id="titleBar">
  <!-- <a href="#" class="toggle"></a> -->
   <div on-click="@.clickToogle(@event)"   style="position:absolute;left:10px;top:5px" > <i class="textEmblema" style="font-size: 2rem" class="fas fa-bars"></i>  </div>
  <span class="title">
    <img on-click="" style="height: 100%" src="./assets/custom/logo_LAST.png" alt="" />  <span class="textEmblema">ENJOY   </span>
  </span>
  
  <ask-question-mobile/>
  
  <div  on-click="@.clickOpenForm(@event)" class="animate__animated animate__heartBeat  animate__slower animate__infinite"  style="position:absolute;right:10px;top:5px" > <i class="textEmblema" style="font-size: 2rem" class="far fa-comment"></i>  </div>

  
  </div>
  
  
 {{#if isVissible}} 
  <div  class="animate__animated   animate__fadeInLeft {{#if isHidden}} animate__fadeOutLeft {{/if}}"   id="navPanel" >
  <div style="display: flex;
    overflow-y: hidden;
    align-items: center;
    justify-content: space-between;">
      <img  style="width:3rem" src="./assets/custom/logo_LAST.png" alt="" />
      <span style="font-size: larger;
    font-width: 74px;
    font-weight: 900;" class="textEmblema" >ENJOY</span>
      <i class="textEmblema" style="font-size: 2rem" class="fas fa-arrow-right"></i>
  </div>

 
  
   <hr style="margin :1rem 0"/>
    <h4 class="textEmblema" >
    <span  onclick="window.open('https://mail.google.com/mail/u/0/?fs=1&to=enjoy@epil.com&tf=cm');"    style="color: #e44c65">Email : enjoy@epil.com </span> <br />     <span style="color: #e44c65" onclick="window.open('tel:+48792437583');"> Tel : +48 888 777 333 </span></h4>

  <h4 class="textEmblema" style="color: #e44c65"  onclick="window.open('https://www.google.com/maps/place/Norberta+Barlickiego+11,+44-100+Gliwice/@50.297285,18.6539295,14.6z/data=!4m6!3m5!1s0x471130567971af3d:0xa25b51d64f85e287!8m2!3d50.2978397!4d18.6723392!16s%2Fg%2F11c1zdgs4w?entry=ttu');"  style="border-bottom: none;"  >
    Gliwice, Norberta Barlickiego 11 
  </h4>
   <nav style="    overflow-y: scroll;
    max-height: 70vh;">
   
   <!-- SOCIAL -->
     <a
       class="link depth-0 icon brands  fa-instagram textEmblema"
       target="_blank"
       href="https://www.instagram.com/enjoy.epil.pl"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0 label"></span> Instagram
     </a>
     <a
       class="link depth-0 icon brands  fa-facebook textEmblema"
       target="_blank"
       href="https://www.facebook.com/facebookusername"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0 label"></span> Facebook
     </a>
     <a
       class="link depth-0 icon brands  fa-telegram textEmblema"
       target="_blank"
       href="https://t.me/+48790213083?text=Hello%2C%20this%20is%20a%20Telegram%20message!"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0 label"></span> Telegram
     </a>
     <a
       class="link depth-0 icon brands  fa-whatsapp textEmblema"
       target="_blank"
       href="https://wa.me/+48790213083?text=Hello%2C%20this%20is%20a%20WhatsApp%20message!"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0 label"></span> Whatsapp
     </a>

<!-- NAVIGATION -->
  <a
       class="link depth-0"
       href="index.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0"></span>{{translateFunc('general' ,  31, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-0"
       href="production.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0"></span>{{translateFunc('general' ,  0, @global.translationLanguage)}}
     </a>
     <a
     href="#"
       class="link depth-0"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0"></span>{{translateFunc('general' , 11, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="laser_epilation_info.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  2, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="electro_epilation_info.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  3, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-0"
       href="#"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0"></span>{{translateFunc('general' ,  4, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="obuchenie_le.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  2, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="obuchenie_ee.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  3, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-0"
       href="#"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0"></span>{{translateFunc('general' ,  5, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="calculator_ee.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span> <span>{{translateFunc('general' ,  16, @global.translationLanguage)}}</span>
     </a>
     <a
       class="link depth-1"
       href="cold_and_hot_obertivanie_diference.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1">  </span>  <span>{{translateFunc('general' ,  17, @global.translationLanguage)}} </span>
     </a>
     <a
       class="link depth-1"
       href="hot_obertivanie_procedure.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  18, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="cold_obertivanie_procedure.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  19, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="cold_scrub.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  20, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="hot_scrub.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  21, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="electro_epilation_info.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  22, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="laser_epilation_info.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  23, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="spf_info.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  24, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="intimnaya_gigiena.html"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  25, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-0"
       href="#"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-0"></span>{{translateFunc('general' ,  6, @global.translationLanguage)}} | {{@global.translationLanguage}}
     </a>
     <a
       class="link depth-1"
       href="#"
       on-click="@.click( @event , 'pol')"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  7, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="#"
       on-click="@.click( @event , 'ukr')"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  8, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="#"
       on-click="@.click( @event , 'rus')"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  9, @global.translationLanguage)}}
     </a>
     <a
       class="link depth-1"
       href="#"
       on-click="@.click( @event , 'eng')"
       style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
       <span class="indent-1"></span>{{translateFunc('general' ,  10, @global.translationLanguage)}}
     </a>
   </nav>
 </div>
 {{/if}}
 `,

  clickOpenForm(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    window.toggleModal();
  },
  onrender: function () {
    let ractiveInstance = this;

    this.el.addEventListener("click", function () {
      ractiveInstance.set("isHidden", true);
      setTimeout(() => {
        ractiveInstance.set("isVissible", false);
      }, 1000);
    });

    if (!window.translationLanguage) {
      const language = localStorage.getItem("language");
      if (language) {
        window.translationLanguage = language;
      } else {
        window.translationLanguage =
          window.navigator.language || window.navigator.userLanguage;
        localStorage.setItem(
          "language",
          window.navigator.language || window.navigator.userLanguage
        );
      }

      this.update("@global.translationLanguage");
    }
  },
  openModal: function () {},
  clickToogle(i) {
    i.preventDefault();
    i.stopPropagation();
    this.set("isHidden", false);
    this.set("isVissible", !this.get("isVissible"));
  },
  click(i, language) {
    i.preventDefault();
    i.stopPropagation();
    localStorage.setItem("language", language);
    window.translationLanguage = language;
    this.update("@global.translationLanguage");
    // TODO finish
  },
});

Ractive.components["header-c"] = Ractive.extend({
  template: `   


  <nav-touch-c/>
 
		<header style="display:flex;align-items:flex-start;justify-content: center" id="header">
  <a style="border-bottom: none;" href="./index.html"><img  style="width:4rem" src="./assets/custom/logo_LAST.png" alt="" /></a>


  <div style="
  padding-left:15px;
    justify-content: space-around;
    display: flex;
    align-items: center;
  " >
  <h4 class="textEmblema" >
    <span  onclick="window.open('https://mail.google.com/mail/u/0/?fs=1&to=enjoy@epil.com&tf=cm');"    style="color: #e44c65">Email : enjoy@epil.com </span> <br />     <span style="color: #e44c65" onclick="window.open('tel:+48792437583');"> Tel : +48 888 777 333 </span></h4>

  <h4 class="textEmblema" style="color: #e44c65"  onclick="window.open('https://www.google.com/maps/place/Norberta+Barlickiego+11,+44-100+Gliwice/@50.297285,18.6539295,14.6z/data=!4m6!3m5!1s0x471130567971af3d:0xa25b51d64f85e287!8m2!3d50.2978397!4d18.6723392!16s%2Fg%2F11c1zdgs4w?entry=ttu');"  style="border-bottom: none;"  style="padding-left:20px">
    Gliwice, Norberta Barlickiego 11 
  </h4>
  </div>


  <nav id="nav">
    <ul  class="icons">
      <brands-c/>

      <li>
        <a href="production.html"> {{translateFunc('general' ,  0, @global.translationLanguage)}}</a>
      </li>
      <li>
        <a>{{translateFunc('general' , 11, @global.translationLanguage)}}</a>
        <ul>
          <li>
            <a href="laser_epilation_info.html">{{translateFunc('general' ,  2, @global.translationLanguage)}}</a>
          </li>
          <li>
            <a href="electro_epilation_info.html">{{translateFunc('general' ,  3, @global.translationLanguage)}}</a>
          </li>
        </ul>
      </li>

      <li>
        <a> {{translateFunc('general' ,  4 , @global.translationLanguage)}}</a>
        <ul>
          <li>
            <a href="obuchenie_le.html"   >{{translateFunc('general' ,  2, @global.translationLanguage)}}</a>
          </li>
          <li>
            <a href="obuchenie_ee.html"  >{{translateFunc('general' ,  3,  @global.translationLanguage)}}</a>
          </li>
        </ul>
      </li>
   
      <li>
        <a>FAQ</a>
          <ul>
            <li>
              <a href="calculator_ee.html"   >{{translateFunc('general' ,  16, @global.translationLanguage)}}</a>
            </li>
            <li>
              <a href="cold_and_hot_obertivanie_diference.html"  >{{translateFunc('general' ,  17,  @global.translationLanguage)}}</a>
            </li>
             <li>
              <a href="hot_obertivanie_procedure.html"  >{{translateFunc('general' ,  18,  @global.translationLanguage)}}</a>
            </li>
             <li>
              <a href="cold_obertivanie_procedure.html"  >{{translateFunc('general' ,  19,  @global.translationLanguage)}}</a>
            </li>
                <li>
              <a href="cold_scrub.html"  >{{translateFunc('general' ,  20,  @global.translationLanguage)}}</a>
            </li>
                <li>
              <a href="hot_scrub.html"  >{{translateFunc('general' ,  21,  @global.translationLanguage)}}</a>
            </li>
                <li>
              <a href="electro_epilation_info.html"  >{{translateFunc('general' ,  22,  @global.translationLanguage)}}</a>
            </li>
                <li>
              <a href="laser_epilation_info.html"  >{{translateFunc('general' ,  23,  @global.translationLanguage)}}</a>
            </li>
              <li>
              <a href="spf_info.html"  >{{translateFunc('general' ,  24,  @global.translationLanguage)}}</a>
            </li>
              <li>
              <a href="intimnaya_gigiena.html"  >{{translateFunc('general' ,  25,  @global.translationLanguage)}}</a>
            </li>
        </ul>
      </li>
      <li>
        <a href="#">{{translateFunc('general' ,  6, @global.translationLanguage)}} | {{@global.translationLanguage}}  </a>
        <ul>
          <li >
            <a on-click="@.click( @event ,  'pol')" href="#"  >{{translateFunc('general' ,  7, @global.translationLanguage)}}</a>
          </li>
          <li>
            <a href="#" on-click="@.click( @event , 'ukr')">{{translateFunc('general' ,  8, @global.translationLanguage)}}</a>
          </li>
          <li>
            <a href="#" on-click="@.click( @event , 'rus')" >{{translateFunc('general' ,  9, @global.translationLanguage)}}</a>
          </li>
          <li>
            <a href="#" on-click="@.click( @event , 'eng')" >{{translateFunc('general' ,  10, @global.translationLanguage)}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</header>
`,
  onrender: function () {
    if (!window.translationLanguage) {
      const language = localStorage.getItem("language");
      if (language) {
        window.translationLanguage = language;
      } else {
        window.translationLanguage =
          window.navigator.language || window.navigator.userLanguage;
        localStorage.setItem(
          "language",
          window.navigator.language || window.navigator.userLanguage
        );
      }

      this.update("@global.translationLanguage");
    }
  },
  click(i, language) {
    i.preventDefault();
    localStorage.setItem("language", language);
    window.translationLanguage = language;
    this.update("@global.translationLanguage");
    // TODO finish
  },
  data: {},
});

Ractive.defaults.data = {
  translateFunc: (page, index, currLanguage) => {
    let translationLanguage = undefined;
    if (currLanguage.includes("uk")) {
      translationLanguage = "ukr";
    } else if (currLanguage.includes("pl") || currLanguage.includes("pol")) {
      translationLanguage = "pol";
    } else if (currLanguage.includes("ru")) {
      translationLanguage = "rus";
    } else if (currLanguage.includes("en")) {
      translationLanguage = "eng";
    }
    return window.translate[page][translationLanguage][index];
  },
};
