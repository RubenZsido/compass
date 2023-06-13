import { Link } from "react-router-dom";

function StartPage() {
  /*Welcome to Compass, where we help you fast track your startup ideas! 
  With our AI technology, we can create a website for you within 5 minutes and instantly launch a marketing 
  campaign on Google and Facebook Ads, reaching your target audience with just one click. Our websites are 
  designed to analyze customer behavior, gather valuable data and build your email list. 
  Get ready to turn your big ideas into successful businesses! Take the first step towards your dreams and try Compass today. 
  Let us help you bring your startup ideas to life!
   */
  return (
    <div>
      <section>
        <div>
          <h1>Compass helps startups</h1>
          <h2>rapidly test the feasibility of an idea.</h2>
          <h4>
            Generating a website and a marketing campaign for you in 5 minutes!
          </h4>
        </div>

        <h3>Services</h3>
        <div>
          <div>
            <h3>Website Generation</h3>
            <img src="https://static.thenounproject.com/png/1128833-200.png" />
            <p>
              We use AI to generate a website based on your input and
              preferences
            </p>
          </div>
          <div>
            <h3>Image Generation</h3>
            <img src="https://media.istockphoto.com/id/1128826884/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment.jpg?s=170667a&w=0&k=20&c=O9Y41QO7idN44o-VK5s7dBUqg-dhJZcyagMb8485BNU=" />
            <p>You can eitehr provide or generate images for the website</p>
          </div>
          <div>
            <h3>Ad Generation</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP61olaRMegyGcd2sqK89TPnj1Blq9UkZMMZMWnxfnQEa6mX-HYkjTOU4lUlq_w4CP_m0&usqp=CAU" />
            <p>
              The ads you make will be live immidietly driving traffic to your
              website
            </p>
          </div>
        </div>
        <div>
          <img src="" />
          <p>
            We are the fastest and cheapest startup prototyping agency right
            now. Sign up now and ensure that your product or service is as
            popular with customers as you think.
          </p>
        </div>
        <p>
          With our AI technology, we can create a website for you within 5
          minutes and instantly launch a marketing campaign on Google and
          Facebook Ads, reaching your target audience with just one click.
        </p>
        <p>
          Our websites are designed to analyze customer behavior, gather
          valuable data, and build your email list.
        </p>
        <p>
          Get ready to turn your big ideas into successful businesses! Take the
          first step towards your dreams and try Compass today. Let us help you
          bring your startup ideas to life!
        </p>
      </section>
      <div>
        <Link to="/copy">
          <button>Get Started</button>
        </Link>
      </div>
      <footer>&copy; 2023 Compass. All rights reserved.</footer>
    </div>
  );
}

export default StartPage;
