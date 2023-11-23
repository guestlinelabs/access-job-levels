import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents: React.FC = () => {
  return (<div className='toc'><table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Business Analysis</th>
                <th>Content</th>
                <th>UX</th>
                <th>Engineer</th>
                <th>QA</th>
                <th>DevOps</th>
                <th>Architecture</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td><Link to="/access-job-levels/product-manager">Product Manager</Link></td>
            <td><Link to="/access-job-levels/senior-business-analyst">Technical PM</Link></td>
            <td><Link to="/access-job-levels/principal-learning-content-creator">Principal Learning Content Creator</Link></td>
            <td></td>
            <td><Link to="/access-job-levels/principal-software-engineer">Principal Software Engineer</Link></td>
            <td><div><Link to="/access-job-levels/qa-specialist">QA Manager</Link></div>
            <div><Link to="/access-job-levels/qa-specialist">QA Specialist</Link></div></td>
            <td></td>
            <td><Link to="/access-job-levels/architect">Architect</Link></td>
        </tr>
        <tr>
            <td><Link to="/access-job-levels/associate-product-manager">Associate Product Manager</Link></td>
            <td><Link to="/access-job-levels/business-analyst">Product Owner/BA</Link></td>
            <td><Link to="/access-job-levels/senior-learning-content-creator">Senior Learning Content Creator</Link></td>
            <td><Link to="/access-job-levels/senior-ux-designer">Senior UX Designer</Link></td>
            <td><Link to="/access-job-levels/senior-software-engineer">Senior Software Engineer</Link></td>
            <td><Link to="/access-job-levels/senior-qa-engineer">Senior QA Engineer</Link></td>
            <td><Link to="/access-job-levels/senior-devops-engineer">Senior DevOps Engineer</Link></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><Link to="/access-job-levels/learning-content-creator">Learning Content Creator</Link></td>
            <td><Link to="/access-job-levels/ux-designer">UX Designer</Link></td>
            <td><Link to="/access-job-levels/software-engineer">Software Engineer</Link></td>
            <td><Link to="/access-job-levels/qa-engineer">QA Engineer</Link></td>
            <td><Link to="/access-job-levels/devops-engineer">DevOps Engineer</Link></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><Link to="/access-job-levels/associate-business-analyst">Associate Business Analyst</Link></td>
            <td><Link to="/access-job-levels/junior-learning-content-creator">Junior Learning Content Creator</Link></td>
            <td><Link to="/access-job-levels/associate-ux-designer">Associate UX Designer</Link></td>
            <td><Link to="/access-job-levels/junior-software-engineer">Junior Software Engineer</Link></td>
            <td><Link to="/access-job-levels/junior-qa-engineer">Junior QA Engineer</Link></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
    </div>
  );
};

export default TableOfContents;
