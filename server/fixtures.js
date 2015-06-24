if (Projects.find().count() === 0) {
  Projects.insert({
    project_id: 'bc12345',
    project_name: 'Scott Birdcage',
    processing_initial_paperwork: 'In Progress',
    architectural_HOA_review: 'Not Started',
    filing_notice_of_commencement:'Not Started',
    in_Engineering: 'Not Started',
    requesting_permits:'Not Started',
    construction_start_date_being_scheduled: 'Not Started',
    construction_ongoing: 'Not Started',
    waiting_for_inspection: 'Not Started',
    construction_delayed:'Not Started',
    construction_completed: 'Not Started',
    project_status:'open',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Projects.insert({
    project_id: 'dk23456',
    project_name: 'Monroe Deck',
    processing_initial_paperwork: 'Completed',
    architectural_HOA_review: 'In Progress',
    filing_notice_of_commencement:'Not Started',
    in_Engineering: 'Not Started',
    requesting_permits:'Not Started',
    construction_start_date_being_scheduled: 'Not Started',
    construction_ongoing: 'Not Started',
    waiting_for_inspection: 'Not Started',
    construction_delayed:'Not Started',
    construction_completed: 'Not Started',
    project_status: 'open',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Projects.insert({
    project_id: 've34567',
    project_name: 'Vereen Veranda',
    processing_initial_paperwork: 'Completed',
    architectural_HOA_review: 'Completed',
    filing_notice_of_commencement:'Completed',
    in_Engineering: 'Completed',
    requesting_permits:'Completed',
    construction_start_date_being_scheduled: 'Completed',
    construction_ongoing: 'Completed',
    waiting_for_inspection: 'Completed',
    construction_delayed:'Completed',
    construction_completed: 'Completed',
    project_status:'Completed',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
}
