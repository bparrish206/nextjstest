// `Question 1
export default function Page() {
    return (
    <p>Hello, Q1 Page!
        Describe how you solved a challenge that one of your previous teams faced.
        How did you determine your solution was successful?
        
        I had a major client complain that our metrics where off compared to Adobe 
        Analytics, and they didn't know who to trust. I did a comparison on how we 
        caluated their metrics vs adobe and then also looked in session definitions as 
        well as other rules being applied. I was able to determine that we were appliying 
        stricter bot traffic rules so our overall session count and conversion rates were different.
        When I explained this to the client they were able to validate and accept this.</p>
    )
}