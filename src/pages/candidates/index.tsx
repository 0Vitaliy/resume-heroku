import ResumeCard from "../../components/card"
import Stack from '@mui/material/Stack';

const Candidates = () => {
  return (
    <Stack spacing={2} padding={'20px'}>
      {[1, 2, 3, 4, 5].map((item: any) => {
        return <ResumeCard />
      })}
    </Stack>
  )
}

export default Candidates;