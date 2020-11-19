import React,{useState} from "react";
import "./SurveyForm.css";



/*   css 

	.surveyForm label {
    margin: 0 5px;
}


*/

function SurveyForm() {

  const [question1, setQuestion1] = useRadioButtons("question1");
  const [question2, setQuestion2] = useRadioButtons("question2");
  const [question3, setQuestion3] = useRadioButtons("question3");
  const [question4, setQuestion4] = useRadioButtons("question4");
  const [question5, setQuestion5] = useRadioButtons("question5");
  const [question6, setQuestion6] = useRadioButtons("question6");
  

  const total = Number(question1)+Number(question2)+Number(question3)+Number(question4)+Number(question5)+Number(question6)

  return (
    <div className="container surveyForm">
      <form>
        {/* question1 */}
        <p>Over the past month, how often have you had a sensation of not emptying your bladder completely after you finished urinating?</p>
        <input type="radio" name="Question1" value="0" checked={question1 === "0"} {...setQuestion1} /><label>Not at all (0 points)</label><br/>
        <input type="radio" name="Question1"  value="1" checked={question1 === "1"} {...setQuestion1} /><label>Less than 1 time in 5 (1 point)</label><br/>
        <input type="radio" name="Question1"  value="2" checked={question1 === "2"}  {...setQuestion1}/><label>Less than half the time (2 points)</label><br/>
        <input type="radio" name="Question1"  value="3" checked={question1 === "3"} {...setQuestion1} /><label>About half the time (3 points)</label><br/> 
        <input type="radio" name="Question1"  value="4" checked={question1 === "4"}  {...setQuestion1}/><label>More than half the time (4 points)</label><br/>
        <input type="radio" name="Question1"  value="5" checked={question1 === "5"} {...setQuestion1} /><label>Almost always (5 points)</label><br/>
        <p>points {question1}</p>

        {/* question2 */}
        <p>Over the past month, how often have you had to urinate again less than 2 hours after you finished urinating?</p>
        <input type="radio" name="Question2" value="0" checked={question2 === "0"} {...setQuestion2} /><label>Not at all (0 points)</label><br/>
        <input type="radio" name="Question2"  value="1" checked={question2 === "1"} {...setQuestion2} /><label>Less than 1 time in 5 (1 point)</label><br/>
        <input type="radio" name="Question2"  value="2" checked={question2 === "2"}  {...setQuestion2}/><label>Less than half the time (2 points)</label><br/>
        <input type="radio" name="Question2"  value="3" checked={question2 === "3"} {...setQuestion2} /><label>About half the time (3 points)</label><br/> 
        <input type="radio" name="Question2"  value="4" checked={question2 === "4"}  {...setQuestion2}/><label>More than half the time (4 points)</label><br/>
        <input type="radio" name="Question2"  value="5" checked={question2 === "5"} {...setQuestion2} /><label>Almost always (5 points)</label><br/>
        <p>points {question2}</p>

        {/* question3 */}
        <p>Over the past month, how often have you had to urinate again less than 2 hours after you finished urinating?</p>
        <input type="radio" name="Question3" value="0" checked={question3 === "0"} {...setQuestion3} /><label>Not at all (0 points)</label><br/>
        <input type="radio" name="Question3"  value="1" checked={question3 === "1"} {...setQuestion3} /><label>Less than 1 time in 5 (1 point)</label><br/>
        <input type="radio" name="Question3"  value="2" checked={question3 === "2"}  {...setQuestion3}/><label>Less than half the time (2 points)</label><br/>
        <input type="radio" name="Question3"  value="3" checked={question3 === "3"} {...setQuestion3} /><label>About half the time (3 points)</label><br/> 
        <input type="radio" name="Question3"  value="4" checked={question3 === "4"}  {...setQuestion3}/><label>More than half the time (4 points)</label><br/>
        <input type="radio" name="Question3"  value="5" checked={question3 === "5"} {...setQuestion3} /><label>Almost always (5 points)</label><br/>
        <p>points {question3}</p>

        {/* question4 */}
        <p>Over the past month, how often have you found it difficult to postpone urination?</p>
        <input type="radio" name="Question4" value="0" checked={question4 === "0"} {...setQuestion4} /><label>Not at all (0 points)</label><br/>
        <input type="radio" name="Question4"  value="1" checked={question4 === "1"} {...setQuestion4} /><label>Less than 1 time in 5 (1 point)</label><br/>
        <input type="radio" name="Question4"  value="2" checked={question4 === "2"}  {...setQuestion4}/><label>Less than half the time (2 points)</label><br/>
        <input type="radio" name="Question4"  value="3" checked={question4 === "3"} {...setQuestion4} /><label>About half the time (3 points)</label><br/> 
        <input type="radio" name="Question4"  value="4" checked={question4 === "4"}  {...setQuestion4}/><label>More than half the time (4 points)</label><br/>
        <input type="radio" name="Question4"  value="5" checked={question4 === "5"} {...setQuestion4} /><label>Almost always (5 points)</label><br/>
        <p>points {question4}</p>


        {/* question5 */}
        <p>Over the past month, how often have you had a weak urinary stream?</p>
        <input type="radio" name="Question5" value="0" checked={question5 === "0"} {...setQuestion5} /><label>Not at all (0 points)</label><br/>
        <input type="radio" name="Question5"  value="1" checked={question5 === "1"} {...setQuestion5} /><label>Less than 1 time in 5 (1 point)</label><br/>
        <input type="radio" name="Question5"  value="2" checked={question5 === "2"}  {...setQuestion5}/><label>Less than half the time (2 points)</label><br/>
        <input type="radio" name="Question5"  value="3" checked={question5 === "3"} {...setQuestion5} /><label>About half the time (3 points)</label><br/> 
        <input type="radio" name="Question5"  value="4" checked={question5 === "4"}  {...setQuestion5}/><label>More than half the time (4 points)</label><br/>
        <input type="radio" name="Question5"  value="5" checked={question5 === "5"} {...setQuestion5} /><label>Almost always (5 points)</label><br/>
        <p>points {question5}</p>

        {/* question6 */}
        <p>Over the past month, how often have you had to push or strain to begin urination?</p>
        <input type="radio" name="Question6" value="0" checked={question6 === "0"} {...setQuestion6} /><label>Not at all (0 points)</label><br/>
        <input type="radio" name="Question6"  value="1" checked={question6 === "1"} {...setQuestion6} /><label>Less than 1 time in 5 (1 point)</label><br/>
        <input type="radio" name="Question6"  value="2" checked={question6 === "2"}  {...setQuestion6}/><label>Less than half the time (2 points)</label><br/>
        <input type="radio" name="Question6"  value="3" checked={question6 === "3"} {...setQuestion6} /><label>About half the time (3 points)</label><br/> 
        <input type="radio" name="Question6"  value="4" checked={question6 === "4"}  {...setQuestion6}/><label>More than half the time (4 points)</label><br/>
        <input type="radio" name="Question6"  value="5" checked={question6 === "5"} {...setQuestion6} /><label>Almost always (5 points)</label><br/>
        <p>points {question6}</p>

        
        <label>Total criteria point count: </label>
        {}
        <input type="text" value={total} />

        <input type="reset" />
      </form>
        
    </div>
  );
}

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}

export default SurveyForm;
