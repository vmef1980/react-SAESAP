import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import AuthImage from "../components/auth/AuthImage";
import AuthSelectImage from "../components/auth/AuthSelectImage";
import AuthForm from "../components/auth/AuthForm";
import AuthBotton from "../components/auth/AuthButton";

function Register() {
  let img ="https://b.stablecog.com/ddd9d362-c39f-4e5f-8958-c4ebf3d7e9cc.jpeg"
  
  const defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAASFBMVEXc3NxmZmb///+6urp7e3vGxsaurq7R0dHAwMChoaHt7e12dnaZmZnLy8uWlpbp6enz8/OCgoKoqKiKioq0tLTj4+P5+fmQkJCmYSIQAAAEfklEQVR4nO2ca8ObIAyFFe/Wqq3W/f9/OqndXnoV4WCyLs+nfdo4wyQkcBpFgiAIgiAIgiAIgiAIgiAIgmBPllftEF8Z2irPqNfjxPF8k2AynI/U69pIfnpWsXDKqddmT1G9U7FQFdQrtOP8WYbmTL1GC8rDuo44PpTU61yjsZGhaahX+pHj2xh/ZmCcwMrUXkccp2w/r2SLDE1CveLXbNbBVImDDpZKShcdccwuTo6b4vyHlFvu+uWmY87C1Cu/x7oOPsOqMjoGyAKnMHEMkIWUevU/WJx3P8HmLFz46YhjLv2J54bw2RJfHXFMrWAh9xfCo49/MS3ZCouqePTXEcccDiojQshIrWKmRQhpqVVEiJyloVYRRRlGCP1c2KkxfIa+VQRUEQ19JVmZ89pSUevAJC0OaQujg0HaEiEiRIT8J0K+Jv1+TUGEtCMcGhKvIeMPDMaNGCHUKqKoxgipqXV8UasL6azo+6oouiCEXKhVzNSIAR2DEIGMH+hHD5rJX8hErWHBu7jTl/UF71LCIkJmOs8MnHTUCv4w+V2GMomQKz5CqNdu0ntcI5576tWbTM5VseX0Yc10ro9q2AT6jdoxTCIuqfcvvdOzgYJVgCy4KOGow0UJTx2zkm2vhNKIqY5ZSbeh7x06tjrm3KWsK+NZ8clX2Vi1+g25aaOY7D6vNDLq4NWmcWqrkaS/KhvDlmBcZfbK4iycKOOzMq5TD83eg7r8wVxxMv4zp36l0xp7YzuyB1/AYc/73UcZGuPxWDep7O3Za8jUZBxLXsTUblKOrxd5522ZVJe8yGBt0inzkPjGNbOPI+P9d3P3greelLrodHCTMIfyRanpLlW9fy28Qxf/6T7k8PDv19M0y1mY//iQb8dPJqbg9yUr9zqtdQbNVmpnYCXr91N2UtZkhFZiNcE6rU6kEysrVsA4sR6OVh/qWml96xiu0G9ozA9N8uJ9dZE0VjbFhWBvT7d6K05NXmY3OUVW5s0Gc9+VQI4M0KO/LYT5uAD3IFsJ8nGBHi9uI8SVHMGGBNkSkg0JsSUkGxJgS4g2BL8lHv48P8C1xNtG5Q7WgAV6zOQC9uxIFOoaaLgTflnYbwv0uswN5KgL9HDRDWSrSKkDee1LcIA3wR3mycr6Aq64e5tx/cBZeb1eaPgDM7yTVhENqpJ8jRDiWMdFO3Gs46KdtK5rULWdWgestlPLQAkhPqBoMIcU8uyLyr/k2ReVf0m7qgVMbwUyevuAuXknLyOoQiJCuAkBeT99wFiwqFVoRIgICYQIESGBECEmxOM5DWZE9zVHFPJpEGoe9DWNFYNox+gA/RiCDyBjA3mQoEam5PMg1DS+p77ogVl/vuYy1M8d7QvSXQ354VVXkB6MnvCYUkHNcXQfF9q27+qO9taBdlfXNErSDu5WrLe4PlG0eB2bXJ8oQrlHp31fBA5RsF9R6FWxm5ShUCFNyb26jDtEfTpegsrQ1JPqiqQKViGrKik69Wj1C6SlN/yFaOa/uudjEBcEQRAEQRAEQRAEQRAEQfg3+Q1RyUi5g1z5jwAAAABJRU5ErkJggg=="
  const [ selectedImage, setSelectImage] = useState(defaultImage);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const handleImageClick = () => {
    document.getElementById("profileImage").click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) =>{
        setSelectImage(e.target.result);
      }
      reader.readAsDataURL(file);
    } else {
      setSelectImage(defaultImage);
    }
  };

  
  
  
  const register = (e) => {
    e.preventDefault();
    console.log(name , email, pass)
  }

    const fields = [
      {
      component: AuthSelectImage,
        props: {
          selectedImage,
          handleImageChange,
          handleImageClick,
          defaultImage
        }
      },

      {
      component: AuthInput,
        props: {
          label: "Nombre",
          paramType: "text",
          paramId: "name",
          paramOnChange: (e) => setName(e.target.value),
          paramPlaceholder: "Ingresa tu nombre",
          paramValue: name
        }
      },

      {
      component: AuthInput,
        props: {
          label: "Correo Eletrónico",
          paramType: "email",
          paramId: "email",
          paramOnChange: (e) => setEmail(e.target.value),
          paramPlaceholder: "example@mail.com",
          paramValue: email
        }
      },

      {
        component: AuthInput,
          props: {
            label: "Contraseña",
            paramType: "password",
            paramId: "password",
            paramOnChange: (e) => setPass(e.target.value),
            paramPlaceholder: "******",
            paramValue: pass
          }
      },

    {
      component: AuthBotton,
        props: {
          nameAction: register,
          label: "Registrarse",
          labelLink: "Iniciar Sesión",
          endpoint: "/"
        }
    }   
    ]


  return(
    <div className="flex justify-center items-center h-screen drop-shadow-xl mt-10">
      <AuthImage imageAuth={img} />
      <AuthForm fields={fields}/>
    </div>
   );
}

export default Register;